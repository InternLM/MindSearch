# Use Node.js 18 as the base image
FROM node:18-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY frontend/React/package*.json ./

# Install dependencies
RUN npm install

# Copy frontend source code
COPY frontend/React/ ./

# Build the application
RUN npm run build

# Use Node.js to serve static files
FROM node:18-alpine

WORKDIR /app

# Install serve package and gettext (for envsubst)
RUN apk add --no-cache gettext && \
    npm install -g serve

# Copy build artifacts
COPY --from=build /app/dist ./dist

# Create start script
RUN echo '#!/bin/sh' > start.sh && \
    echo 'find ./dist -type f -exec sed -i "s|http://127.0.0.1:8002|$API_URL|g" {} +' >> start.sh && \
    echo 'serve -s dist -l $SERVE_PORT' >> start.sh && \
    chmod +x start.sh

# Use the start script
CMD ["/bin/sh", "./start.sh"]
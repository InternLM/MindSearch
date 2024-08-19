# Use Node.js 18 as the base image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package files first to leverage Docker cache
COPY frontend/React/package*.json ./

# Install dependencies
RUN npm install

# Copy source code after npm install to prevent unnecessary reinstalls
COPY frontend/React/ ./

# Modify vite.config.ts for Docker environment
# Beacuse we use Docker Compose to manage the backend and frontend services, we can use the service name as the hostname
RUN sed -i '/server: {/,/},/c\
    server: {\
    host: "0.0.0.0",\
    port: 8080,\
    proxy: {\
    "/solve": {\
    target: "http://backend:8002",\
    changeOrigin: true,\
    },\
    // "/solve": {\
    //   target: "https://mindsearch.openxlab.org.cn",\
    //   changeOrigin: true,\
    // },\
    },\
    },' vite.config.ts

# Start the development server
CMD ["npm", "start"]
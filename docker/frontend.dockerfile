# 使用 Node.js 18 作为基础镜像
FROM node:18-alpine as build

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json
COPY frontend/React/package*.json ./

# 安装依赖
RUN npm install

# 复制前端源代码
COPY frontend/React/ ./

# 构建应用
RUN npm run build

# 使用 Node.js 来 serve 静态文件
FROM node:18-alpine

WORKDIR /app

# 安装 serve 包和 gettext（用于 envsubst）
RUN apk add --no-cache gettext && \
    npm install -g serve

# 复制构建产物
COPY --from=build /app/dist ./dist

# 创建启动脚本
RUN echo '#!/bin/sh' > start.sh && \
    echo 'find ./dist -type f -exec sed -i "s|http://127.0.0.1:8002|$API_URL|g" {} +' >> start.sh && \
    echo 'serve -s dist -l $SERVE_PORT' >> start.sh && \
    chmod +x start.sh

# 使用启动脚本
CMD ["/bin/sh", "./start.sh"]
#!/bin/bash

# ai-nav-demo 部署脚本
# 用法：./deploy.sh

set -e

PROJECT_DIR="/opt/workplace/pro/ai-nav"
DEPLOY_DIR="/opt/website/ai-nav"

echo "========== 开始部署 ai-nav-demo =========="

# 1. 进入项目目录
cd "$PROJECT_DIR"
echo "[1/5] 进入项目目录：$PROJECT_DIR"

# 2. 拉取远程代码并检查是否有更新
echo "[2/5] 拉取远程代码..."
BEFORE_PULL=$(git rev-parse HEAD)
git pull origin master
AFTER_PULL=$(git rev-parse HEAD)

if [ "$BEFORE_PULL" = "$AFTER_PULL" ]; then
    echo "✅ 代码已是最新，无需重新部署"
    exit 0
fi

echo "✅ 检测到代码更新，继续部署..."

# 3. 安装依赖并打包
echo "[3/5] 安装依赖并打包..."
npm install
npm run build

# 4. 复制打包内容到部署目录
echo "[4/5] 复制打包内容到 $DEPLOY_DIR..."
mkdir -p "$DEPLOY_DIR"
rm -rf "$DEPLOY_DIR"/*
cp -r "$PROJECT_DIR/dist/"* "$DEPLOY_DIR/"

# 5. 重新加载 Nginx
echo "[5/5] 重新加载 Nginx..."
nginx -s reload

echo "========== 部署完成 =========="
echo "访问地址：https://www.python4office.cn/ai-nav/"

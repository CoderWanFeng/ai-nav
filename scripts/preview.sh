#!/bin/bash

# 停止可能运行的预览服务器
pkill -f "vite" 2>/dev/null || true
pkill -f "node.*vite" 2>/dev/null || true

# 等待进程结束
sleep 1

# 清除缓存
echo "清除缓存..."
rm -rf node_modules/.vite 2>/dev/null || true
rm -rf dist 2>/dev/null || true
rm -rf .vite 2>/dev/null || true

# 重新构建
echo "重新构建..."
npm run build

# 启动预览服务器
echo "启动预览服务器..."
npm run preview -- --host 0.0.0.0

#!/bin/bash
set -e

echo "Installing pnpm globally..."
npm install -g pnpm

echo "Installing project dependencies..."
pnpm install --frozen-lockfile

echo "Building Next.js application..."
pnpm run build

echo "Build completed successfully!"
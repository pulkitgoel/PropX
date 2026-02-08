#!/bin/bash
set -ex  # -x shows every command executed

echo "Installing pnpm globally..."
npm install -g pnpm

echo "Checking pnpm version..."
pnpm --version

echo "Installing project dependencies with verbose output..."
pnpm install --frozen-lockfile --verbose || {
  echo "=== INSTALLATION FAILED ==="
  echo "NPM error logs:"
  find ~/.npm/_logs -name "*.log" -type f -exec cat {} \;
  exit 1
}

echo "Building Next.js application..."
pnpm run build

echo "Build completed successfully!"
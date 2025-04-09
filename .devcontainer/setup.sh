#!/bin/bash

if [ ! -d "my-app" ]; then
  echo "Creating Vite app..."
  npm create vite@latest my-app --template react-ts -- --yes
else
  echo "Vite app already exists."
fi

cd my-app
echo "Installing dependencies..."
npm install
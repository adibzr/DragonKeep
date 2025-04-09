#!/bin/bash

if [ ! -d "my-app" ]; then
  echo "Creating Vite app..."
  export NPM_CONFIG_YES=true
  yes | npm create vite@latest my-app -- --template react-ts
else
  echo "Vite app already exists."
fi

cd my-app
echo "Installing dependencies..."
npm install --yes
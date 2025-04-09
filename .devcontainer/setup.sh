#!/bin/bash

if [ ! -d "DungeonKeep" ]; then
  echo "Creating Vite app..."
  export NPM_CONFIG_YES=true
  yes | npm create vite@latest DungeonKeep -- --template react-ts
else
  echo "Vite app already exists."
fi

cd DungeonKeep
echo "Installing dependencies..."
npm install --yes
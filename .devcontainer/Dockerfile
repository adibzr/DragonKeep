# Use the TypeScript & Node.js devcontainer image as a base
FROM mcr.microsoft.com/devcontainers/typescript-node:latest

# [Optional] Install common utilities
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get install -y --no-install-recommends \
    nano \
    vim \
    wget \
    curl \
    git \
    unzip \
    htop \
    python3 \
    python3-pip \
    gnupg2 \
    net-tools


# Clean up apt cache to reduce image size
RUN apt-get autoremove -y && apt-get clean -y
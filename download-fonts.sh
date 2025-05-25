#!/bin/bash

# Create fonts directory if it doesn't exist
mkdir -p assets/fonts

# Download Urbanist fonts
cd assets/fonts

# Regular
curl -L -o Urbanist-Regular.ttf "https://github.com/coreyhu/Urbanist/raw/master/fonts/ttf/Urbanist-Regular.ttf"

# Medium
curl -L -o Urbanist-Medium.ttf "https://github.com/coreyhu/Urbanist/raw/master/fonts/ttf/Urbanist-Medium.ttf"

# SemiBold
curl -L -o Urbanist-SemiBold.ttf "https://github.com/coreyhu/Urbanist/raw/master/fonts/ttf/Urbanist-SemiBold.ttf"

# Bold
curl -L -o Urbanist-Bold.ttf "https://github.com/coreyhu/Urbanist/raw/master/fonts/ttf/Urbanist-Bold.ttf"

cd ../.. 
#!/bin/bash

# Prompt for GitHub personal access token
read -p "GitHub username: " USERNAME
read -s -p "GitHub token (will not be shown): " TOKEN
echo
REPO="kteq-nuxt"

# Build the Nuxt site
echo "Generating static site..."
npm run generate || { echo "Nuxt generate failed"; exit 1; }

# Copy static output to real dist/
rm -rf dist
cp -R .output/public dist

# Push to gh-pages branch using token
echo "Deploying to gh-pages branch..."
cd dist || exit 1
git init
git remote add origin https://$USERNAME:$TOKEN@github.com/$USERNAME/$REPO.git
git checkout -b gh-pages
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages --force
cd ..

# Clean up
rm -rf dist/.git

echo "✅ Deployment complete! Visit: https://$USERNAME.github.io/$REPO/"

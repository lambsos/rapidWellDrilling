# GitHub Pages Deployment Guide

This guide will help you deploy your Rapid Well Drilling website to GitHub Pages for a demo.

## Prerequisites

1. A GitHub account
2. Git installed on your computer
3. Your code pushed to a GitHub repository

## Step 1: Initialize Git Repository (if not already done)

```bash
cd rapidWellDrilling
git init
git add .
git commit -m "Initial commit"
```

## Step 2: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right, then "New repository"
3. Name your repository (e.g., `rapid-well-drilling`)
4. Choose Public or Private
5. **DO NOT** initialize with README, .gitignore, or license (if you already have code)
6. Click "Create repository"

## Step 3: Connect Local Repository to GitHub

```bash
# Replace YOUR_USERNAME and YOUR_REPO_NAME with your actual values
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

## Step 4: Build and Deploy to GitHub Pages

### Option A: Quick Deploy (Recommended)

Simply run:

```bash
npm run deploy
```

This will:
1. Build your app for production
2. Deploy it to the `gh-pages` branch
3. Make it available at `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

**Note:** The first time you run this, you'll be prompted to authenticate with GitHub.

### Option B: Manual Deploy

If you prefer to do it manually:

```bash
# Build for production
npm run build:prod

# Deploy to GitHub Pages
npx angular-cli-ghpages --dir=dist/rapid-well-drilling/browser
```

## Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Select "gh-pages" branch and "/ (root)" folder
6. Click "Save"

Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## Step 6: Update Deployments

Every time you make changes and want to update the demo:

```bash
# Make your changes, then:
git add .
git commit -m "Your commit message"
git push

# Deploy to GitHub Pages
npm run deploy
```

## Troubleshooting

### If deployment fails:
- Make sure you're logged into GitHub
- Check that your repository exists and you have push access
- Verify the build completes successfully first: `npm run build:prod`

### If the site shows a 404:
- Wait a few minutes for GitHub Pages to update (can take 1-5 minutes)
- Check that the `gh-pages` branch exists in your repository
- Verify the Pages settings point to the `gh-pages` branch

### If routes don't work:
- GitHub Pages doesn't support Angular routing by default
- You may need to add a `404.html` file that redirects to `index.html`
- Or use HashLocationStrategy in your Angular router

## Custom Domain (Optional)

If you want to use a custom domain:
1. Add a `CNAME` file in the `dist/rapid-well-drilling/browser` folder with your domain
2. Configure DNS settings with your domain provider
3. Update GitHub Pages settings with your custom domain


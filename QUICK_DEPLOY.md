# Quick GitHub Pages Deployment

## Fastest Way to Deploy

1. **Make sure your code is on GitHub:**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push
   ```

2. **Deploy to GitHub Pages:**
   ```bash
   npm run deploy
   ```

3. **Enable GitHub Pages:**
   - Go to your GitHub repository
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` → `/ (root)`
   - Save

4. **Your site will be live at:**
   `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

That's it! The deployment script handles everything automatically.

## Updating Your Site

After making changes:
```bash
git add .
git commit -m "Updated content"
git push
npm run deploy
```

Wait 1-5 minutes for GitHub Pages to update.


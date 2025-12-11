# Portfolio Deployment Guide

## 🚀 Quick Start

Your portfolio is built with Jekyll and ready to deploy to GitHub Pages!

## Step 1: Add Project Preview Images

Add these three images to `assets/images/`:

1. **llm-agents-preview.png** - From your LLM project
   - Suggested: Use the architecture diagram from your README (the one showing agent flow)

2. **prostate-cancer-preview.png** - From your Prostate Cancer project
   - Suggested: Model Comparison chart or Methodology Flow image

3. **ad-click-preview.png** - From your Ad Click project
   - Suggested: Create a simple visualization showing F1-score improvement (0.51 → 0.81)

**How to add images:**
```bash
# Copy images to the assets/images folder
cp /path/to/your/image.png assets/images/llm-agents-preview.png
cp /path/to/your/image.png assets/images/prostate-cancer-preview.png
cp /path/to/your/image.png assets/images/ad-click-preview.png
```

## Step 2: Create GitHub Repository

1. Go to [GitHub](https://github.com/new)
2. Create a new repository named **exactly**: `carolchu1208.github.io`
3. Make it **Public**
4. Do NOT initialize with README (we already have one)

## Step 3: Deploy to GitHub Pages

```bash
# Navigate to your portfolio directory
cd /Users/carolchu/github_local/carolchu1208/carolchu1208.github.io

# Add all files
git add .

# Commit
git commit -m "Initial portfolio deployment

- Add Jekyll-based portfolio site
- Include 3 featured projects (LLM, Prostate Cancer, Ad Click)
- Add About Me and Contact sections
- Custom CSS styling

🤖 Generated with Claude Code
Co-Authored-By: Claude <noreply@anthropic.com>"

# Add remote (replace with your actual repo URL)
git remote add origin https://github.com/carolchu1208/carolchu1208.github.io.git

# Push to GitHub
git push -u origin main
```

## Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select **main** branch
4. Click **Save**
5. Wait 1-2 minutes for deployment

Your site will be live at: **https://carolchu1208.github.io**

## 📝 Customization Tips

### Update Project Information
Edit `index.md` to:
- Update project descriptions
- Add/remove projects
- Modify your bio

### Change Colors/Styling
Edit `assets/css/style.scss` to customize:
- Color scheme (search for `#3498db` to change primary blue)
- Font sizes
- Card layouts

### Add More Pages
Create new `.md` files in the root directory:
```bash
# Example: Create a blog page
echo "---
layout: page
title: Blog
---

# My Blog Posts" > blog.md
```

## 🧪 Test Locally (Optional)

If you want to preview changes before deploying:

```bash
# Install Jekyll (one-time setup)
gem install bundler jekyll

# Install dependencies
bundle install

# Run local server
bundle exec jekyll serve

# View at http://localhost:4000
```

## 🔄 Future Updates

After making changes to your portfolio:

```bash
git add .
git commit -m "Update portfolio: [describe changes]"
git push
```

GitHub Pages will automatically rebuild your site in 1-2 minutes.

## 📧 Need Help?

- **Jekyll Documentation:** https://jekyllrb.com/docs/
- **GitHub Pages Guide:** https://docs.github.com/en/pages
- **Your README:** See `README.md` for quick reference

---

**Your Portfolio Stack:**
- ✅ Jekyll static site generator
- ✅ GitHub Pages hosting (free!)
- ✅ Custom CSS styling
- ✅ Responsive design (mobile-friendly)
- ✅ SEO optimized with meta tags

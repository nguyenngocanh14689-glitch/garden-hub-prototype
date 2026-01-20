# 🚀 DEPLOYMENT GUIDE - GardenHub Prototype

Complete guide for deploying and sharing this website prototype.

---

## 📦 METHOD 1: ZIP File (Easiest)

### When to Use
- Sending to colleagues via email/Slack
- Sharing with developers who will code it
- Backup/archiving

### Steps

```bash
# Navigate to project folder
cd "/Users/ngocanhducket/Desktop/Automation/FB - NicheSite/Document"

# Create ZIP file
zip -r GardenHub-Prototype.zip Website-Prototype/

# The ZIP will be ~50KB
```

### Share via:
- ✅ Email (if under 25MB)
- ✅ Google Drive / Dropbox
- ✅ Slack / Teams / Telegram
- ✅ WeTransfer (free  up to 2GB)

### Recipient Instructions:
1. Unzip the file
2. Double-click `index.html`
3. View in any modern browser

---

## 🌐 METHOD 2: Netlify Drop (Fastest) ⭐ RECOMMENDED

### When to Use
- Need a live URL immediately
- Want to share with multiple people
- Testing on different devices/browsers

### Steps

1. **Visit**: https://app.netlify.com/drop
2. **Drag & drop** the entire `Website-Prototype` folder
3. **Get instant URL**: `https://random-name-123.netlify.app`
4. **Share** the URL with anyone!

### Pros:
- ✅ **Free**, no signup required
- ✅ Public URL accessible anywhere
- ✅ Fast loading (CDN)
- ✅ Auto HTTPS
- ✅ Works on mobile/desktop

### Cons:
- Random URL (can customize with free account)
- Site stays live indefinitely (or until deleted)

### Custom Domain (Optional):
If you signup (free):
- Change URL to `your-project-name.netlify.app`
- Add custom domain if you own one

---

## 🐙 METHOD 3: GitHub Pages (Professional)

### When to Use
- Working with a dev team
- Need version control
- Want professional presentation
- Long-term hosting

### Prerequisites
```bash
# Install Git (if not installed)
git --version

# If not installed, download from: https://git-scm.com
```

### Steps

#### A. Create GitHub Repository

1. **Go to**: https://github.com/new
2. **Repository name**: `garden-hub-prototype`
3. **Description**: "Garden website prototype - English version for US market"
4. **Public** ✅ (or Private if you prefer)
5. Click **Create repository**

#### B. Initialize and Push

```bash
# Navigate to prototype folder
cd "/Users/ngocanhducket/Desktop/Automation/FB - NicheSite/Document/Website-Prototype"

# Initialize git
git init

# Create .gitignore (optional)
echo ".DS_Store" > .gitignore

# Add all files
git add .

# Commit
git commit -m "Initial commit: Garden Hub prototype - English version"

# Add remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/garden-hub-prototype.git

# Push to GitHub
git branch -M main
git push -u origin main
```

#### C. Enable GitHub Pages

1. Go to your repo: `https://github.com/YOUR_USERNAME/garden-hub-prototype`
2. Click **Settings** tab
3. Scroll to **Pages** section (left sidebar)
4. Under **Source**: Select `main` branch
5. Click **Save**
6. Wait 1-2 minutes
7. Your site will be live at: `https://YOUR_USERNAME.github.io/garden-hub-prototype`

### Pros:
- ✅ **Free** hosting
- ✅ Version control (track changes)
- ✅ Collaborate with team
- ✅ Professional URL
- ✅ Easy updates (just `git push`)

### Updating the Site:
```bash
# Make your changes, then:
git add .
git commit -m "Updated design/content"
git push

# Site auto-updates in 1-2 minutes!
```

---

## 🎨 METHOD 4: CodePen/CodeSandbox (Interactive)

### When to Use
- Quick prototyping/testing
- Sharing for feedback
- Educational purposes
- Allow others to fork/modify

### Option A: CodePen

1. **Visit**: https://codepen.io/pen/
2. **Paste** your HTML, CSS, JS into respective panels:
   - HTML panel: Content from `index.html` (without `<head>` tags)
   - CSS panel: Content from `styles.css`
   - JS panel: Content from `script.js`
3. **Save** (requires free account)
4. **Share** URL: `https://codepen.io/username/pen/xxxxx`

### Option B: CodeSandbox

1. **Visit**: https://codesandbox.io
2. **Create** new sandbox → Static template
3. **Upload** all your files (index.html, article.html, styles.css, script.js)
4. **Share** URL: `https://xxxxx.csb.app`

### Pros:
- ✅ Live editing/preview
- ✅ Others can fork and modify
- ✅ Great for collaboration
- ✅ Built-in dev tools

### Cons:
- ⚠️ Requires account
- ⚠️ Not ideal for multi-page sites (CodePen)

---

## ☁️ METHOD 5: Vercel (Alternative to Netlify)

### Steps

```bash
# Install Vercel CLI
npm install -g vercel

# Navigate to folder
cd "/Users/ngocanhducket/Desktop/Automation/FB - NicheSite/Document/Website-Prototype"

# Deploy
vercel

# Follow prompts:
# - Login with GitHub/Email
# - Choose project name
# - Get instant URL: https://project-name.vercel.app
```

### Pros:
- ✅ Similar to Netlify
- ✅ Great performance
- ✅ Easy updates (`vercel` command)
- ✅ Custom domain support (free)

---

## 📤 METHOD 6: Google Drive + HTML Viewer (Quick Share)

### Steps

1. **Upload** entire `Website-Prototype` folder to Google Drive
2. **Right-click** `index.html` → Get link → Anyone with link can view
3. **Share link**: `https://drive.google.com/file/d/xxxxx/view`

### Viewing:
Recipients can:
- Download and view locally, OR
- Use online viewer: `https://htmlpreview.github.io/?[YOUR_DRIVE_LINK]`

### Pros:
- ✅ Super quick
- ✅ Familiar interface

### Cons:
- ⚠️ Not ideal UX (requires download or external viewer)
- ⚠️ No direct live preview

---

## 🎯 RECOMMENDED WORKFLOW BY USE CASE

| Use Case | Best Method | Why |
|----------|-------------|-----|
| **Quick demo to client** | Netlify Drop | Instant URL, professional |
| **Send to developer** | ZIP file | They can code locally |
| **Team collaboration** | GitHub Pages | Version control + hosting |
| **Get design feedback** | Netlify Drop | Easy to share, works everywhere |
| **Portfolio showcase** | Vercel or GitHub Pages | Professional, custom domain |
| **Educational/tutorial** | CodePen | Interactive, forkable |

---

## 📧 EMAIL TEMPLATE FOR SHARING

### Subject: Garden Website Prototype - Review

```
Hi [Name],

I've created a prototype for the Garden website targeting the US market. 

🌐 Live Demo: [INSERT URL HERE]

The prototype includes:
✅ Responsive design (desktop/tablet/mobile)
✅ Homepage with magazine layout
✅ Sample article page with Table of Contents
✅ All interactive features (navigation, sticky header, etc.)

Technical specs:
- Pure HTML/CSS/JavaScript (no frameworks)
- Mobile-first responsive design
- Optimized for SEO (meta tags, semantic HTML)
- Based on analysis of top garden websites

Please review and let me know your feedback!

Files are also available here: [Google Drive/GitHub link]

Best regards,
[Your Name]
```

---

## 🔒 SECURITY NOTES

- ✅ This prototype is **safe to share** - no sensitive data
- ✅ All code is **client-side only** (HTML/CSS/JS)
- ✅ No backend, database, or API keys
- ✅ Images are **placeholders** (can be replaced with real images later)

---

## 🆘 TROUBLESHOOTING

### Issue: Links don't work after deployment
**Solution**: Make sure all links are relative:
- ✅ `href="article.html"` (good)
- ❌ `href="/article.html"` (may break)
- ❌ `href="file:///...` (definitely breaks)

### Issue: Fonts don't load
**Solution**: Google Fonts are already linked in `<head>`, should work fine. If not, check internet connection.

### Issue: JavaScript not working
**Solution**: Make sure `script.js` is in the same folder as HTML files.

---

## 📞 SUPPORT

If you need help deploying, contact your developer or check:
- Netlify Docs: https://docs.netlify.com
- GitHub Pages: https://pages.github.com
- Vercel Docs: https://vercel.com/docs

---

**Created**: January 20, 2026  
**Version**: 1.0  
**Last Updated**: January 20, 2026

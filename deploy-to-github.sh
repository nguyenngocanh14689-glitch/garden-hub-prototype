#!/bin/bash

# ============================================
# GITHUB DEPLOYMENT SCRIPT
# Garden Hub Prototype
# ============================================

echo "🚀 Deploying Garden Hub Prototype to GitHub..."
echo ""

# Navigate to project folder
cd "/Users/ngocanhducket/Desktop/Automation/FB - NicheSite/Document/Website-Prototype"

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed!"
    echo "Please install Git from: https://git-scm.com"
    exit 1
fi

echo "✅ Git is installed"
echo ""

# Initialize git if not already initialized
if [ ! -d ".git" ]; then
    echo "📦 Initializing Git repository..."
    git init
    echo "✅ Git initialized"
else
    echo "✅ Git already initialized"
fi

# Create .gitignore
echo "📝 Creating .gitignore..."
cat > .gitignore << 'EOF'
.DS_Store
.vscode/
*.log
node_modules/
EOF
echo "✅ .gitignore created"

# Add all files
echo "📦 Adding files to Git..."
git add .
echo "✅ Files added"

# Commit
echo "💾 Creating initial commit..."
git commit -m "Initial commit: Garden Hub prototype - English version for US market"
echo "✅ Committed"

echo ""
echo "================================================"
echo "✅ LOCAL SETUP COMPLETE!"
echo "================================================"
echo ""
echo "📋 NEXT STEPS:"
echo ""
echo "1. Go to GitHub and create a new repository:"
echo "   https://github.com/new"
echo ""
echo "2. Repository settings:"
echo "   - Name: garden-hub-prototype"
echo "   - Description: Garden website prototype - English version for US market"
echo "   - Public ✓"
echo "   - DO NOT initialize with README"
echo ""
echo "3. After creating repo, run these commands:"
echo ""
echo "   git remote add origin https://github.com/YOUR_USERNAME/garden-hub-prototype.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "4. Enable GitHub Pages:"
echo "   - Go to repo Settings → Pages"
echo "   - Source: main branch"
echo "   - Save"
echo ""
echo "5. Your site will be live at:"
echo "   https://YOUR_USERNAME.github.io/garden-hub-prototype"
echo ""
echo "================================================"

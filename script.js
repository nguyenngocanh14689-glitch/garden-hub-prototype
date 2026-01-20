// GARDEN HUB - JavaScript
// Interactive features for the prototype

document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Menu Toggle
    const menuBtn = document.querySelector('.menu-btn');
    const nav = document.querySelector('.nav');
    
    if (menuBtn) {
        menuBtn.addEventListener('click', function() {
            nav.classList.toggle('mobile-active');
        });
    }
    
    // Sticky TOC on scroll
    const toc = document.getElementById('toc');
    if (toc) {
        const tocOffset = toc.offsetTop;
        
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > tocOffset - 100) {
                toc.style.position = 'sticky';
                toc.style.top = '100px';
            }
        });
        
        // Smooth scroll for TOC links
        const tocLinks = toc.querySelectorAll('a');
        tocLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    }
    
    // Close sticky bottom ad
    const adClose = document.querySelector('.ad-close');
    const stickyAd = document.querySelector('.sticky-bottom-ad');
    
    if (adClose && stickyAd) {
        adClose.addEventListener('click', function() {
            stickyAd.style.display = 'none';
        });
    }
    
    // Search functionality (placeholder)
    const searchBtn = document.querySelector('.search-btn');
    const searchInputs = document.querySelectorAll('.search-input');
    
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            alert('Search functionality would be implemented here!');
        });
    }
    
    searchInputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                alert('Searching for: ' + this.value);
            }
        });
    });
    
    // Social share buttons
    const shareButtons = document.querySelectorAll('.share-btn');
    shareButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const platform = this.className.split(' ')[1];
            const url = window.location.href;
            const title = document.querySelector('.article-title')?.textContent || document.title;
            
            let shareUrl;
            switch(platform) {
                case 'facebook':
                    shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
                    break;
                case 'pinterest':
                    shareUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&description=${encodeURIComponent(title)}`;
                    break;
                case 'twitter':
                    shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
                    break;
            }
            
            if (shareUrl) {
                window.open(shareUrl, 'share', 'width=600,height=400');
            }
        });
    });
    
    // Newsletter form
    const newsletterInputs = document.querySelectorAll('.newsletter-input');
    newsletterInputs.forEach(input => {
        const form = input.closest('.sidebar-widget') || input.closest('.newsletter-widget');
        const submitBtn = form?.querySelector('.btn-primary');
        
        if (submitBtn) {
            submitBtn.addEventListener('click', function(e) {
                e.preventDefault();
                const email = input.value;
                if (email && email.includes('@')) {
                    alert('Cảm ơn bạn đã đăng ký! Email: ' + email);
                    input.value = '';
                } else {
                    alert('Vui lòng nhập email hợp lệ!');
                }
            });
        }
    });
    
    // Reading progress bar (for article pages)
    if (document.querySelector('.article-body')) {
        const progressBar = document.createElement('div');
        progressBar.style.position = 'fixed';
        progressBar.style.top = '0';
        progressBar.style.left = '0';
        progressBar.style.height = '3px';
        progressBar.style.backgroundColor = '#2C7A51';
        progressBar.style.width = '0%';
        progressBar.style.transition = 'width 0.2s ease';
        progressBar.style.zIndex = '1000';
        document.body.appendChild(progressBar);
        
        window.addEventListener('scroll', function() {
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (window.pageYOffset / windowHeight) * 100;
            progressBar.style.width = scrolled + '%';
        });
    }
    
    // Lazy loading for images (placeholder for real implementation)
    const imagePlaceholders = document.querySelectorAll('.image-placeholder');
    imagePlaceholders.forEach(placeholder => {
        placeholder.style.cursor = 'pointer';
        placeholder.addEventListener('click', function() {
            console.log('Image would load here in production');
        });
    });
    
    // Add reading time calculation (example)
    const articleBody = document.querySelector('.article-body');
    if (articleBody) {
        const wordCount = articleBody.textContent.trim().split(/\s+/).length;
        const readingTime = Math.ceil(wordCount / 200); // 200 words per minute
        console.log(`Estimated reading time: ${readingTime} minutes`);
    }
    
    // Table of contents active link highlighting
    if (toc) {
        const sections = document.querySelectorAll('.article-body h2[id]');
        window.addEventListener('scroll', function() {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                    current = section.getAttribute('id');
                }
            });
            
            const tocLinks = toc.querySelectorAll('a');
            tocLinks.forEach(link => {
                link.style.fontWeight = '400';
                if (link.getAttribute('href') === '#' + current) {
                    link.style.fontWeight = '700';
                }
            });
        });
    }
    
    console.log('🌱 GardenHub prototype loaded successfully!');
});

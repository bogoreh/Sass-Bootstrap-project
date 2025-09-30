// Initialize the dashboard
document.addEventListener('DOMContentLoaded', function() {
    // Set initial theme
    const savedTheme = localStorage.getItem('dashboard-theme') || 'light';
    setTheme(savedTheme);
    
    // Initialize GSAP animations
    initAnimations();
    
    // Set up event listeners
    setupEventListeners();
});

// Initialize GSAP animations
function initAnimations() {
    // Animate sidebar items on load
    gsap.from('.sidebar-nav .nav-item', {
        duration: 0.5,
        x: -20,
        opacity: 0,
        stagger: 0.1,
        delay: 0.2
    });
    
    // Animate stats cards
    gsap.from('.stat-card', {
        duration: 0.6,
        y: 30,
        opacity: 0,
        stagger: 0.1,
        delay: 0.5
    });
    
    // Animate chart bars
    gsap.from('.chart-bar', {
        duration: 1,
        height: 0,
        stagger: 0.1,
        delay: 1,
        ease: "power2.out"
    });
}

// Set up event listeners
function setupEventListeners() {
    // Theme switcher
    const themeButtons = document.querySelectorAll('.theme-btn');
    themeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const theme = this.getAttribute('data-theme');
            setTheme(theme);
            
            // Update active state
            themeButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Sidebar toggle
    const toggleSidebar = document.getElementById('toggleSidebar');
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('mainContent');
    
    toggleSidebar.addEventListener('click', function() {
        sidebar.classList.toggle('collapsed');
        mainContent.classList.toggle('expanded');
        
        // Animate the toggle
        gsap.to(sidebar, { duration: 0.3, width: sidebar.classList.contains('collapsed') ? 70 : 250 });
    });
    
    // Mobile sidebar toggle
    if (window.innerWidth < 992) {
        // Add mobile menu button to top nav
        const topNav = document.querySelector('.top-nav');
        const mobileMenuBtn = document.createElement('button');
        mobileMenuBtn.className = 'btn d-md-none mobile-menu-btn';
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        mobileMenuBtn.style.marginRight = '15px';
        topNav.insertBefore(mobileMenuBtn, topNav.firstChild);
        
        mobileMenuBtn.addEventListener('click', function() {
            sidebar.classList.toggle('active');
            
            // Animate sidebar on mobile
            if (sidebar.classList.contains('active')) {
                gsap.to(sidebar, { duration: 0.3, x: 0 });
            } else {
                gsap.to(sidebar, { duration: 0.3, x: '-100%' });
            }
        });
    }
    
    // Add hover animations to cards
    const cards = document.querySelectorAll('.card, .stat-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            gsap.to(this, { duration: 0.2, y: -5, ease: "power1.out" });
        });
        
        card.addEventListener('mouseleave', function() {
            gsap.to(this, { duration: 0.2, y: 0, ease: "power1.out" });
        });
    });
    
    // Animate activity items on scroll
    if ('IntersectionObserver' in window) {
        const activityObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    gsap.to(entry.target, {
                        duration: 0.5,
                        x: 0,
                        opacity: 1,
                        stagger: 0.1,
                        ease: "power2.out"
                    });
                    activityObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        document.querySelectorAll('.activity-list li').forEach(item => {
            gsap.set(item, { x: -20, opacity: 0 });
            activityObserver.observe(item);
        });
    }
}

// Set theme function
function setTheme(theme) {
    // Remove existing theme classes
    document.body.classList.remove('light-theme', 'dark-theme', 'blue-theme', 'green-theme');
    
    // Add new theme class
    document.body.classList.add(`${theme}-theme`);
    
    // Save to localStorage
    localStorage.setItem('dashboard-theme', theme);
    
    // Update active theme button
    const themeButtons = document.querySelectorAll('.theme-btn');
    themeButtons.forEach(button => {
        button.classList.remove('active');
        if (button.getAttribute('data-theme') === theme) {
            button.classList.add('active');
        }
    });
    
    // Animate theme transition
    gsap.to('body', { duration: 0.3, opacity: 0.7, ease: "power2.inOut" });
    gsap.to('body', { duration: 0.3, opacity: 1, delay: 0.3, ease: "power2.inOut" });
}

// Handle window resize
window.addEventListener('resize', function() {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('mainContent');
    
    if (window.innerWidth < 992) {
        sidebar.classList.remove('collapsed');
        mainContent.classList.remove('expanded');
    }
});
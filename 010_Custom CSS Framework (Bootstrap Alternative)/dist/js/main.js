// Initialize GSAP and ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

class CustomFramework {
    constructor() {
        this.init();
    }

    init() {
        this.setupAnimations();
        this.setupNavigation();
        this.setupSmoothScrolling();
    }

    setupAnimations() {
        // Animate elements on page load
        gsap.from('.hero-title', {
            duration: 1,
            y: 50,
            opacity: 0,
            ease: 'power3.out'
        });

        gsap.from('.hero-subtitle', {
            duration: 1,
            y: 30,
            opacity: 0,
            delay: 0.2,
            ease: 'power3.out'
        });

        gsap.from('.hero-buttons', {
            duration: 1,
            y: 30,
            opacity: 0,
            delay: 0.4,
            ease: 'power3.out'
        });

        gsap.from('.hero-image', {
            duration: 1.5,
            scale: 0.8,
            opacity: 0,
            delay: 0.6,
            ease: 'power2.out'
        });

        // Scroll-triggered animations
        gsap.utils.toArray('[data-animate]').forEach(element => {
            const animation = element.getAttribute('data-animate');
            const delay = element.getAttribute('data-delay') || 0;
            
            gsap.fromTo(element, 
                {
                    opacity: 0,
                    y: 50
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    delay: parseFloat(delay),
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 80%',
                        end: 'bottom 20%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });

        // Card hover animations
        gsap.utils.toArray('.card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                gsap.to(card, {
                    scale: 1.05,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });

            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    scale: 1,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
        });
    }

    setupNavigation() {
        const navbar = document.querySelector('.navbar');
        
        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                navbar.style.backdropFilter = 'blur(10px)';
                navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.background = 'transparent';
                navbar.style.backdropFilter = 'none';
                navbar.style.boxShadow = 'none';
            }
        });
    }

    setupSmoothScrolling() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(link.getAttribute('href'));
                
                if (target) {
                    gsap.to(window, {
                        duration: 1,
                        scrollTo: target,
                        ease: 'power2.inOut'
                    });
                }
            });
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new CustomFramework();
});

// Add some additional CSS via JavaScript for dynamic effects
const style = document.createElement('style');
style.textContent = `
    .navbar {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;
        transition: all 0.3s ease;
        padding: 1rem 0;
    }
    
    .hero {
        padding: 120px 0 80px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
    }
    
    .features {
        background: #f8f9fa;
    }
    
    .cta {
        background: linear-gradient(135deg, #4361ee 0%, #3a0ca3 100%);
    }
    
    .footer {
        background: #1a1a1a;
    }
    
    @media (max-width: 768px) {
        .navbar-nav {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }
    }
`;
document.head.appendChild(style);
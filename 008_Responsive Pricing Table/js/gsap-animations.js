// GSAP Animations
class PricingAnimations {
    constructor() {
        this.init();
    }

    init() {
        // Register GSAP plugins if needed
        // gsap.registerPlugin(ScrollTrigger);
        
        this.setupAnimations();
        this.setupEventListeners();
    }

    setupAnimations() {
        // Initial page load animations
        this.pageLoadAnimations();
        
        // Scroll animations
        this.scrollAnimations();
    }

    pageLoadAnimations() {
        // Hero section animation
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
            delay: 0.3,
            ease: 'power3.out'
        });

        // Staggered card animations
        gsap.from('.pricing-card', {
            duration: 0.8,
            y: 60,
            opacity: 0,
            stagger: 0.2,
            delay: 0.5,
            ease: 'back.out(1.7)'
        });
    }

    scrollAnimations() {
        // Animate cards on scroll
        const cards = document.querySelectorAll('.pricing-card');
        
        cards.forEach((card, index) => {
            gsap.fromTo(card, 
                {
                    y: 50,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 80%',
                        end: 'bottom 20%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });
    }

    setupEventListeners() {
        // Button hover animations
        const buttons = document.querySelectorAll('.plan-btn');
        
        buttons.forEach(button => {
            button.addEventListener('mouseenter', (e) => {
                gsap.to(e.target, {
                    scale: 1.05,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
            
            button.addEventListener('mouseleave', (e) => {
                gsap.to(e.target, {
                    scale: 1,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
            
            button.addEventListener('click', (e) => {
                this.handlePlanSelection(e);
            });
        });

        // Card hover animations
        const cards = document.querySelectorAll('.pricing-card');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', (e) => {
                if (!e.currentTarget.classList.contains('featured')) {
                    gsap.to(e.currentTarget, {
                        y: -10,
                        duration: 0.4,
                        ease: 'power2.out'
                    });
                }
            });
            
            card.addEventListener('mouseleave', (e) => {
                if (!e.currentTarget.classList.contains('featured')) {
                    gsap.to(e.currentTarget, {
                        y: 0,
                        duration: 0.4,
                        ease: 'power2.out'
                    });
                }
            });
        });
    }

    handlePlanSelection(e) {
        const plan = e.target.dataset.plan;
        const button = e.target;
        
        // Animation for button click
        gsap.to(button, {
            scale: 0.95,
            duration: 0.1,
            yoyo: true,
            repeat: 1,
            ease: 'power2.inOut'
        });
        
        // Show selection feedback
        this.showSelectionFeedback(plan);
    }

    showSelectionFeedback(plan) {
        const card = document.querySelector(`.${plan}-card`);
        
        // Pulse animation for selected card
        gsap.to(card, {
            scale: 1.02,
            duration: 0.3,
            yoyo: true,
            repeat: 1,
            ease: 'power2.inOut'
        });
        
        // Add glow effect
        gsap.to(card, {
            boxShadow: '0 0 30px rgba(67, 97, 238, 0.5)',
            duration: 0.3,
            yoyo: true,
            repeat: 1,
            ease: 'power2.inOut'
        });
        
        console.log(`Selected plan: ${plan}`);
        // Here you would typically redirect to checkout or show a modal
    }

    // Additional animation methods
    animatePriceChange(card, newPrice) {
        const priceElement = card.querySelector('.amount');
        
        gsap.to(priceElement, {
            scale: 1.2,
            duration: 0.3,
            yoyo: true,
            repeat: 1,
            ease: 'power2.inOut',
            onComplete: () => {
                priceElement.textContent = newPrice;
            }
        });
    }
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PricingAnimations();
});
// Main JavaScript functionality
class PricingTable {
    constructor() {
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupResponsiveBehavior();
    }

    setupEventListeners() {
        // Plan selection
        document.querySelectorAll('.plan-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                this.handlePlanSelection(e);
            });
        });

        // Window resize handling
        window.addEventListener('resize', () => {
            this.handleResize();
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            this.handleKeyboardNavigation(e);
        });
    }

    handlePlanSelection(e) {
        const plan = e.target.dataset.plan;
        const card = e.target.closest('.pricing-card');
        
        // Remove previous selections
        document.querySelectorAll('.pricing-card').forEach(c => {
            c.classList.remove('selected');
        });
        
        // Add selection to current card
        card.classList.add('selected');
        
        // Show confirmation (in a real app, this would be a modal or redirect)
        this.showPlanConfirmation(plan);
    }

    showPlanConfirmation(plan) {
        const planNames = {
            basic: 'Basic',
            pro: 'Professional',
            enterprise: 'Enterprise'
        };
        
        // Create a simple toast notification
        this.showToast(`You selected the ${planNames[plan]} plan!`);
    }

    showToast(message) {
        // Create toast element
        const toast = document.createElement('div');
        toast.className = 'position-fixed top-0 start-50 translate-middle-x mt-3 alert alert-success';
        toast.style.zIndex = '9999';
        toast.textContent = message;
        
        document.body.appendChild(toast);
        
        // Animate in
        toast.style.transform = 'translateY(-100px)';
        toast.style.opacity = '0';
        
        gsap.to(toast, {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: 'back.out(1.7)',
            onComplete: () => {
                // Remove after delay
                setTimeout(() => {
                    gsap.to(toast, {
                        y: -100,
                        opacity: 0,
                        duration: 0.5,
                        onComplete: () => {
                            toast.remove();
                        }
                    });
                }, 3000);
            }
        });
    }

    setupResponsiveBehavior() {
        // Handle mobile-specific behaviors
        if (window.innerWidth < 768) {
            this.enableMobileFeatures();
        }
    }

    enableMobileFeatures() {
        // Add swipe functionality for mobile
        this.setupSwipeGestures();
    }

    setupSwipeGestures() {
        let startX = 0;
        const container = document.querySelector('.pricing-section .row');
        
        container.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });
        
        container.addEventListener('touchend', (e) => {
            const endX = e.changedTouches[0].clientX;
            const diff = startX - endX;
            
            if (Math.abs(diff) > 50) { // Minimum swipe distance
                if (diff > 0) {
                    this.swipeToNext();
                } else {
                    this.swipeToPrevious();
                }
            }
        });
    }

    swipeToNext() {
        // Implementation for swipe to next card
        console.log('Swiped to next card');
    }

    swipeToPrevious() {
        // Implementation for swipe to previous card
        console.log('Swiped to previous card');
    }

    handleResize() {
        // Adjust layout for different screen sizes
        const featuredCard = document.querySelector('.featured');
        
        if (window.innerWidth < 768) {
            featuredCard.style.transform = 'scale(1)';
        } else {
            featuredCard.style.transform = 'scale(1.05)';
        }
    }

    handleKeyboardNavigation(e) {
        // Keyboard navigation for accessibility
        const cards = Array.from(document.querySelectorAll('.pricing-card'));
        const currentCard = document.querySelector('.pricing-card:focus-within');
        
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            e.preventDefault();
            this.focusNextCard(cards, currentCard);
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            e.preventDefault();
            this.focusPreviousCard(cards, currentCard);
        } else if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const button = currentCard?.querySelector('.plan-btn');
            if (button) button.click();
        }
    }

    focusNextCard(cards, currentCard) {
        const currentIndex = cards.indexOf(currentCard);
        const nextIndex = (currentIndex + 1) % cards.length;
        cards[nextIndex].querySelector('.plan-btn').focus();
    }

    focusPreviousCard(cards, currentCard) {
        const currentIndex = cards.indexOf(currentCard);
        const prevIndex = (currentIndex - 1 + cards.length) % cards.length;
        cards[prevIndex].querySelector('.plan-btn').focus();
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PricingTable();
});

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PricingTable;
}
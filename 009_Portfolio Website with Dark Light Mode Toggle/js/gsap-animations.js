// GSAP Animations
document.addEventListener('DOMContentLoaded', function() {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // Hero section animations
    const heroTl = gsap.timeline();
    heroTl
        .from('.hero-title', { 
            duration: 1, 
            y: 50, 
            opacity: 0, 
            ease: 'power3.out' 
        })
        .from('.hero-subtitle', { 
            duration: 0.8, 
            y: 30, 
            opacity: 0, 
            ease: 'power3.out' 
        }, '-=0.5')
        .from('.hero-description', { 
            duration: 0.8, 
            y: 30, 
            opacity: 0, 
            ease: 'power3.out' 
        }, '-=0.3')
        .from('.hero-buttons', { 
            duration: 0.8, 
            y: 30, 
            opacity: 0, 
            ease: 'power3.out' 
        }, '-=0.3')
        .from('.profile-image-container', { 
            duration: 1.2, 
            scale: 0.8, 
            opacity: 0, 
            rotation: 10, 
            ease: 'back.out(1.7)' 
        }, '-=0.5');
    
    // About section animations
    gsap.from('.about-section .section-title', {
        scrollTrigger: {
            trigger: '.about-section',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out'
    });
    
    gsap.from('.about-text', {
        scrollTrigger: {
            trigger: '.about-section',
            start: 'top 70%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        y: 30,
        opacity: 0,
        stagger: 0.2,
        ease: 'power3.out'
    });
    
    gsap.from('.stat-item', {
        scrollTrigger: {
            trigger: '.about-stats',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        y: 30,
        opacity: 0,
        stagger: 0.2,
        ease: 'power3.out'
    });
    
    gsap.from('.skill-item', {
        scrollTrigger: {
            trigger: '.skills-chart',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        y: 30,
        opacity: 0,
        stagger: 0.2,
        ease: 'power3.out'
    });
    
    // Projects section animations
    gsap.from('.projects-section .section-title', {
        scrollTrigger: {
            trigger: '.projects-section',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out'
    });
    
    gsap.from('.project-card', {
        scrollTrigger: {
            trigger: '.projects-section .row',
            start: 'top 70%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        ease: 'power3.out'
    });
    
    // Contact section animations
    gsap.from('.contact-section .section-title', {
        scrollTrigger: {
            trigger: '.contact-section',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out'
    });
    
    gsap.from('.contact-text, .contact-item', {
        scrollTrigger: {
            trigger: '.contact-info',
            start: 'top 70%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        y: 30,
        opacity: 0,
        stagger: 0.2,
        ease: 'power3.out'
    });
    
    gsap.from('.contact-form', {
        scrollTrigger: {
            trigger: '.contact-form',
            start: 'top 70%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        duration: 1,
        y: 30,
        opacity: 0,
        ease: 'power3.out'
    });
    
    // Navbar animation on scroll
    gsap.to('.navbar', {
        scrollTrigger: {
            trigger: 'body',
            start: '50px top',
            end: 'bottom top',
            toggleClass: { targets: '.navbar', className: 'scrolled' }
        }
    });
});
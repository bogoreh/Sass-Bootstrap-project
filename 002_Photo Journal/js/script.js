// Sample photo data
const photos = [
    {
        id: 1,
        title: "Mountain Sunrise",
        category: "nature",
        url: "https://placehold.co/600x400/4a6572/ffffff?text=Mountain+Sunrise"
    },
    {
        id: 2,
        title: "City Skyline",
        category: "urban",
        url: "https://placehold.co/600x400/34495e/ffffff?text=City+Skyline"
    },
    {
        id: 3,
        title: "Portrait Session",
        category: "portrait",
        url: "https://placehold.co/600x400/8e44ad/ffffff?text=Portrait+Session"
    },
    {
        id: 4,
        title: "Forest Path",
        category: "nature",
        url: "https://placehold.co/600x400/27ae60/ffffff?text=Forest+Path"
    },
    {
        id: 5,
        title: "Urban Architecture",
        category: "urban",
        url: "https://placehold.co/600x400/95a5a6/ffffff?text=Urban+Architecture"
    },
    {
        id: 6,
        title: "Beach Portrait",
        category: "portrait",
        url: "https://placehold.co/600x400/e74c3c/ffffff?text=Beach+Portrait"
    },
    {
        id: 7,
        title: "Waterfall",
        category: "nature",
        url: "https://placehold.co/600x400/3498db/ffffff?text=Waterfall"
    },
    {
        id: 8,
        title: "Night City",
        category: "urban",
        url: "https://placehold.co/600x400/2c3e50/ffffff?text=Night+City"
    }
];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize photo gallery
    initGallery();
    
    // Setup filter functionality
    setupFilters();
    
    // Setup contact form
    setupContactForm();
    
    // Add scroll effect to navbar
    setupNavbarScroll();
});

// Initialize photo gallery
function initGallery() {
    const photoGrid = document.getElementById('photo-grid');
    
    // Clear existing content
    photoGrid.innerHTML = '';
    
    // Create photo cards
    photos.forEach(photo => {
        const col = document.createElement('div');
        col.className = 'col-md-6 col-lg-4 col-xl-3';
        
        col.innerHTML = `
            <div class="photo-card" data-category="${photo.category}">
                <img src="${photo.url}" alt="${photo.title}" class="img-fluid">
                <div class="photo-overlay">
                    <h5>${photo.title}</h5>
                    <span class="photo-category">${photo.category}</span>
                </div>
            </div>
        `;
        
        photoGrid.appendChild(col);
    });
}

// Setup filter functionality
function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value
            const filterValue = this.getAttribute('data-filter');
            
            // Filter photos
            filterPhotos(filterValue);
        });
    });
}

// Filter photos based on category
function filterPhotos(category) {
    const photoCards = document.querySelectorAll('.photo-card');
    
    photoCards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.parentElement.style.display = 'block';
        } else {
            card.parentElement.style.display = 'none';
        }
    });
}

// Setup contact form
function setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Simple validation
        if (name && email && subject && message) {
            // In a real application, you would send this data to a server
            alert('Thank you for your message! In a real application, this would be sent to a server.');
            
            // Reset form
            contactForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
}

// Setup navbar scroll effect
function setupNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.backgroundColor = 'rgba(33, 37, 41, 0.95)';
        } else {
            navbar.style.backgroundColor = 'rgba(33, 37, 41, 0.9)';
        }
    });
}
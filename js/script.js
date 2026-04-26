// ============================================
// SMOOTH SCROLLING & NAVIGATION
// ============================================

// Update active navigation link based on scroll position
document.addEventListener('scroll', () => {
    updateActiveNavLink();
});

function updateActiveNavLink() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
}

// Smooth scroll function for buttons
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// ============================================
// FORM HANDLING
// ============================================

document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form values
    const formData = new FormData(e.target);
    const name = e.target.querySelector('input[type="text"]').value;
    const email = e.target.querySelector('input[type="email"]').value;
    const message = e.target.querySelector('textarea').value;

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Simple validation
    if (!name || !email || !message) {
        showAlert('Please fill in all fields', 'error');
        return;
    }
    
    if (!emailRegex.test(email)) {
        showAlert('Please enter a valid email address', 'error');
        return;
    }
    
    if (message.trim().length < 10) {
        showAlert('Message must be at least 10 characters', 'error');
        return;
    }

    // Show success message
    showAlert('Thank you for reaching out! I\'ll get back to you soon.', 'success');

    // Reset form
    e.target.reset();
});

// Simple alert function
function showAlert(message, type) {
    const alert = document.createElement('div');
    alert.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#4caf50' : '#f44336'};
        color: white;
        padding: 15px 25px;
        border-radius: 5px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.2);
        z-index: 2000;
        animation: slideIn 0.3s ease;
    `;
    alert.textContent = message;
    document.body.appendChild(alert);

    // Remove alert after 3 seconds
    setTimeout(() => {
        alert.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => alert.remove(), 300);
    }, 3000);
}

// ============================================
// PROJECT MODAL
// ============================================

let currentImageIndex = 0;
let currentImages = [];

function openProjectModal(images, title, description) {
    currentImages = Array.isArray(images) ? images : [images];
    currentImageIndex = 0;

    const modal = document.getElementById('projectModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalIndicators = document.getElementById('modalIndicators');

    updateModalImage();
    modalTitle.textContent = title;
    modalDescription.textContent = description;

    // Create indicators
    modalIndicators.innerHTML = '';
    currentImages.forEach((_, index) => {
        const indicator = document.createElement('span');
        indicator.className = `indicator ${index === 0 ? 'active' : ''}`;
        indicator.onclick = () => goToImage(index);
        modalIndicators.appendChild(indicator);
    });

    modal.classList.add('show');
    document.body.style.overflow = 'hidden'; // Prevent background scroll
}

function updateModalImage() {
    const modalImage = document.getElementById('modalImage');
    modalImage.src = currentImages[currentImageIndex];

    // Update indicators
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentImageIndex);
    });
}

function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) {
        currentImageIndex = currentImages.length - 1;
    } else if (currentImageIndex >= currentImages.length) {
        currentImageIndex = 0;
    }
    updateModalImage();
}

function goToImage(index) {
    currentImageIndex = index;
    updateModalImage();
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('show');
    document.body.style.overflow = 'auto'; // Restore scroll
    currentImages = [];
    currentImageIndex = 0;
}

// Close modal when clicking outside
document.getElementById('projectModal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('projectModal')) {
        closeProjectModal();
    }
});

// Close modal on ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeProjectModal();
    } else if (e.key === 'ArrowLeft') {
        changeImage(-1);
    } else if (e.key === 'ArrowRight') {
        changeImage(1);
    }
});

// Add animation styles dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ============================================
// MOBILE MENU (Optional Enhancement)
// ============================================

// Add smooth scroll padding for mobile navbar
const navbar = document.querySelector('.navbar');
if (navbar) {
    const navHeight = navbar.offsetHeight;
    document.documentElement.style.scrollPaddingTop = (navHeight + 20) + 'px';
}

// ============================================
// PAGE LOAD ANIMATION
// ============================================

window.addEventListener('load', () => {
    // Trigger initial active link update
    updateActiveNavLink();

    // Add fade-in animation to page
    document.body.style.animation = 'fadeIn 0.5s ease';
});

// Add fade-in animation
const fadeInStyle = document.createElement('style');
fadeInStyle.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    body {
        animation: fadeIn 0.5s ease;
    }
`;
document.head.appendChild(fadeInStyle);

// ============================================
// INTERSECTION OBSERVER FOR SCROLL ANIMATIONS
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all project cards and other elements
document.querySelectorAll('.project-card, .skill-item').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

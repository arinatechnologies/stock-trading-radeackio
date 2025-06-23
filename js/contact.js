// js/contact.js
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('customForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            
            if (!nameInput.value.trim()) {
                alert('Please enter your name');
                return;
            }
            
            if (!emailInput.value.trim() || !emailInput.value.includes('@')) {
                alert('Please enter a valid email address');
                return;
            }
            
            if (!messageInput.value.trim()) {
                alert('Please enter your message');
                return;
            }
            
            // Form submission handling would go here
            // For demo purposes, we'll just show a success message
            alert('Thank you for your message! Our team will get back to you soon.');
            contactForm.reset();
        });
    }
    
    // Smooth scrolling for any anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
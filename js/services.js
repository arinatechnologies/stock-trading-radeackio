// Service cards animation on scroll
document.addEventListener('DOMContentLoaded', function() {
  const serviceCards = document.querySelectorAll('.service-card');
  
  const animateCards = () => {
    serviceCards.forEach((card, index) => {
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, 150 * index);
    });
  };
  
  // Initial state
  serviceCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });
  
  // Animate on load
  setTimeout(animateCards, 300);
  
  // Intersection Observer for scroll animation
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCards();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    const gridSection = document.querySelector('.services-grid-section');
    if (gridSection) {
      observer.observe(gridSection);
    }
  }
});
// Mobile menu toggle functionality could be added here if needed
document.addEventListener('DOMContentLoaded', function() {
  // Simple animation for timeline items
  const timelineItems = document.querySelectorAll('.timeline-item');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });
  
  timelineItems.forEach(item => {
    item.style.opacity = 0;
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(item);
  });
  
  // Add hover effect to team members
  const teamMembers = document.querySelectorAll('.team-member');
  teamMembers.forEach(member => {
    member.addEventListener('mouseenter', function() {
      this.querySelector('i').style.transform = 'scale(1.1)';
    });
    
    member.addEventListener('mouseleave', function() {
      this.querySelector('i').style.transform = 'scale(1)';
    });
  });
});
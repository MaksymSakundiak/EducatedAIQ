// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  function scrollCarousel(direction) {
    const carousel = document.querySelector('.testimonial-carousel');
    carousel.scrollBy({ left: direction * 300, behavior: 'smooth' });
  }
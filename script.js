// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
    // If the link is in the nav, hide the nav on mobile
    if (this.parentElement.parentElement.classList.contains('nav-links')) {
      document.querySelector('.nav-links').classList.remove('show');
    }
  });
});

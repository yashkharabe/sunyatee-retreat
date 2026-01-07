function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}

// Dropdown Toggle Logic for Home
document.addEventListener('click', (e) => {
  const dropdown = document.querySelector('.dropdown');
  const dropdownLink = dropdown.querySelector('a');

  if (e.target === dropdownLink) {
    e.preventDefault(); // Prevent navigation on the first click to show menu
    dropdown.classList.toggle('show');
  } else if (!dropdown.contains(e.target)) {
    dropdown.classList.remove('show');
  }
});

// Seamless Infinite Scroll Logic
document.addEventListener("DOMContentLoaded", () => {
  const imageBox = document.getElementById("imageBox");
  if (!imageBox) return;

  // Clone all images and append them to create the seamless loop
  const originalImages = Array.from(imageBox.children);
  originalImages.forEach(img => {
    const clone = img.cloneNode(true);
    imageBox.appendChild(clone);
  });
});

// Scroll Effects (Header Transparency & Content Fade)
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const header = document.querySelector('.main-header');
  const landingContent = document.querySelector('.landing-content');

  // Toggle Header Background
  if (scrollPosition > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }

  if (landingContent) {
    // Fade out and move up as user scrolls down
    const opacity = 1 - (scrollPosition / 500);
    const translateY = scrollPosition * 0.5;

    if (opacity >= 0) {
      landingContent.style.opacity = opacity;
      landingContent.style.transform = `translate(-50%, calc(-50% - ${translateY}px))`;
    }
  }
});

// Shrinking navbar on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('shrink');
    } else {
        navbar.classList.remove('shrink');
    }
});

// Dark mode toggle
const modeToggle = document.getElementById('mode-toggle');
modeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        modeToggle.textContent = '☀️';
    } else {
        modeToggle.textContent = '🌙';
    }
});

// Netflix-style intro animation
window.addEventListener('load', function() {
    const overlay = document.querySelector('.overlay');
    overlay.style.opacity = 0;
    overlay.style.transition = 'opacity 2s';
    setTimeout(() => { overlay.style.opacity = 1; }, 100);
});

// Error handling for video
const video = document.getElementById('bg-video');
video.addEventListener('error', function(e) {
    console.error('Video failed to load:', e);
});

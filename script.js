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

document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById("opening-overlay");
    overlay.addEventListener("animationend", () => {
        overlay.style.display = "none";
    });
});

const itemsPerPage = 4;

function setupPagination(gridId) {
  const gridContainer = document.getElementById(gridId);
  const gridItems = gridContainer.querySelectorAll('.grid-item');
  const prevBtn = gridContainer.querySelector('.prev-btn');
  const nextBtn = gridContainer.querySelector('.next-btn');

  let currentPage = 1;
  const totalPages = Math.ceil(gridItems.length / itemsPerPage);

  function updateGrid() {
    gridItems.forEach((item, index) => {
      if (index >= (currentPage - 1) * itemsPerPage && index < currentPage * itemsPerPage) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });

    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
  }

  prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      updateGrid();
    }
  });

  nextBtn.addEventListener('click', () => {
    if (currentPage < totalPages) {
      currentPage++;
      updateGrid();
    }
  });

  updateGrid();
}

// Initialize pagination for each grid
setupPagination('museum-pemadam');
setupPagination('anjungan-kalsel');
setupPagination('anjungan-kaltim');
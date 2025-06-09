// Shrinking navbar on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('shrink');
    } else {
        navbar.classList.remove('shrink');
    }
});

document.getElementById("scrollToTop").addEventListener("click", function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('.animate-element');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, { threshold: 0.2 });

  animatedElements.forEach(el => observer.observe(el));
});


const modeToggle = document.getElementById('mode-toggle');
const currentMode = localStorage.getItem('theme');
if (currentMode === 'dark') {
    document.body.classList.add('dark-mode');
    modeToggle.textContent = '☀️';
}

modeToggle.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        modeToggle.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        modeToggle.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
});


window.addEventListener('load', function() {
  const overlay = document.querySelector('.overlay');
  overlay.style.opacity = 1;
  overlay.style.transition = 'opacity 2s ease';
  setTimeout(() => {
      overlay.style.opacity = 0;
  }, 100); // Fade-out after 100ms
  setTimeout(() => {
      overlay.style.display = 'none';
  }, 2100); // Remove from layout after transition
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

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('visible');
    }
  });
}
let options = { threshold: [0.2] };
let observer = new IntersectionObserver(onEntry, options);
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"

AOS.init({
  duration: 1000, // durasi animasi dalam ms
  once: true      // animasi hanya sekali saat scroll
});

document.addEventListener("DOMContentLoaded", () => {
  const sliders = document.querySelectorAll(".slider");

  sliders.forEach((slider) => {
    const images = slider.querySelectorAll(".slider-image");
    let currentIndex = 0;

    setInterval(() => {
      images[currentIndex].classList.remove("active");
      currentIndex = (currentIndex + 1) % images.length;
      images[currentIndex].classList.add("active");
    }, 3000); // Change image every 3 seconds
  });
});

const form = document.getElementById("kontakForm");
const pesanSukses = document.getElementById("pesanSukses");

form.addEventListener("submit", async function(event) {
  event.preventDefault(); // Biar nggak reload halaman

  const data = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      form.reset(); // kosongkan form
      pesanSukses.style.display = "block"; // tampilkan pesan sukses
    } else {
      alert("Terjadi kesalahan. Coba lagi ya.");
    }
  } catch (error) {
    alert("Gagal mengirim. Coba lagi ya.");
  }
});

function openPopup(id) {
  document.getElementById(id).classList.add("active");
}
function closePopup(id) {
  document.getElementById(id).classList.remove("active");
}



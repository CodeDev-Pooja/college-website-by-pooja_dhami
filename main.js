// Toggle the mobile menu
function toggleMenu() {
  const menu = document.getElementById('menu');
  const hamburger = document.querySelector('.hamburger');
  menu.classList.toggle('active');
  hamburger.classList.toggle('active');
}

// Toggle dropdown menus
function toggleDropdown(event) {
  if (window.innerWidth <= 768) {
    event.stopPropagation();
    const dropdown = event.target.closest('.dropdown');
    dropdown.classList.toggle('open');
  }
}

// Close dropdowns when clicking outside
document.addEventListener('click', (e) => {
  if (window.innerWidth <= 768) {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach((dropdown) => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('open');
      }
    });
  }
});
// Scroll animation
const card = document.getElementById('principalCard');
    window.addEventListener('scroll', () => {
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        card.classList.add('show');
      }
    });




document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelectorAll('.menu a').forEach(el => el.classList.remove('active'));
    link.classList.add('active');
    // Close the menu after clicking a link (for mobile)
    if (window.innerWidth <= 768) {
      const menu = document.getElementById('menu');
      const hamburger = document.querySelector('.hamburger');
      menu.classList.remove('active');
      hamburger.classList.remove('active');
    }
  });
});

document.addEventListener("click", function (e) {
  if (window.innerWidth <= 768) {
    const menu = document.getElementById('menu');
    const hamburger = document.querySelector('.hamburger');
    if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
      menu.classList.remove('active');
      hamburger.classList.remove('active');
    }

    const dropdowns = document.querySelectorAll(".dropdown");
    dropdowns.forEach(d => d.classList.remove("o"));
  }
});

const themeToggleBtn = document.getElementById('themeToggleBtn');
const body = document.body;
const lightIcon = document.getElementById('lightIcon');
const darkIcon = document.getElementById('darkIcon');

function updateIcons() {
  if (body.classList.contains('light-mode')) {
    lightIcon.style.display = 'none';
    darkIcon.style.display = 'inline-block';
  } else {
    lightIcon.style.display = 'inline-block';
    darkIcon.style.display = 'none';
  }
}

// Set default theme to light mode for new users
if (!localStorage.getItem('theme')) {
  localStorage.setItem('theme', 'light');
}

if (localStorage.getItem('theme') === 'light') {
  body.classList.add('light-mode');
}
updateIcons();

themeToggleBtn.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  localStorage.setItem('theme', body.classList.contains('light-mode') ? 'light' : 'dark');
  updateIcons();
});


  
  AOS.init({
      duration: 1000,
      once: true
    });

    const images = document.querySelectorAll(".banner-slider img");
    const indicators = document.getElementById("indicators");
    let current = 0;
    let interval = setInterval(nextSlide, 3000);

    function updateIndicators() {
      indicators.innerHTML = '';
      images.forEach((_, index) => {
        const dot = document.createElement("span");
        dot.classList.toggle("active", index === current);
        dot.onclick = () => goToSlide(index);
        indicators.appendChild(dot);
      });
    }

    function showSlide(index) {
      images.forEach(img => img.classList.remove("active"));
      images[index].classList.add("active");
      updateIndicators();
    }

    function nextSlide() {
      current = (current + 1) % images.length;
      showSlide(current);
    }

    function prevSlide() {
      current = (current - 1 + images.length) % images.length;
      showSlide(current);
    }

    function goToSlide(index) {
      current = index;
      showSlide(current);
    }

    updateIndicators();


  // === Cart Logic ===
  const cartBtn = document.querySelector("header button.relative");
  let cartCount = 3;

  cartBtn?.addEventListener("click", () => {
    cartCount++;
    const counter = cartBtn.querySelector("span");
    counter.textContent = cartCount;
  });

  const buyButtons = document.querySelectorAll("button.bg-blue-600");

  buyButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      cartCount++;
      const counter = document.querySelector("header button.relative span");
      if (counter) counter.textContent = cartCount;
      alert("Added to cart!");
    });
  });




document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    let currentIndex = 0;
    let interval;
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
        dots[i].classList.toggle("active", i === index);
      });
      currentIndex = index;
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }
  
    dots.forEach(dot => {
      dot.addEventListener("click", () => {
        const index = parseInt(dot.getAttribute("data-slide"));
        showSlide(index);
        resetInterval();
      });
    });
  
    function startSlider() {
      interval = setInterval(nextSlide, 5000); // 5 sec delay
    }
  
    function resetInterval() {
      clearInterval(interval);
      startSlider();
    }
  
    showSlide(currentIndex);
    startSlider();
  });



  // === Dark/Light Mode Toggle ===
const toggleBtn = document.getElementById("toggle-theme");
const body = document.body;

// Check the saved theme in localStorage and apply it
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add("dark");
  toggleBtn.textContent = "Toggle Light Mode";
} else {
  body.classList.remove("dark");
  toggleBtn.textContent = "Toggle Dark Mode";
 }

// Toggle between dark and light modes
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  
  if (body.classList.contains("dark")) {
    localStorage.setItem('theme', 'dark');
    toggleBtn.textContent = "Toggle Light Mode";
  } else {
    localStorage.setItem('theme', 'light');
    toggleBtn.textContent = "Toggle Dark Mode";
  }
});



// Optional: draggable slider with mouse/touch
const slider = document.getElementById("categorySlider");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("grabbing");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("grabbing");
});
slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("grabbing");
});
slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2; // scroll-fast
  slider.scrollLeft = scrollLeft - walk;
});





document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const productCards = document.querySelectorAll('.product-card'); // All product cards
    const productSection = document.getElementById('products');
    const productGrid = productSection.querySelector('.grid');
  
    // Search when Enter is pressed
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const query = e.target.value.toLowerCase().trim();
        if (!query) return resetSearch();
  
        let foundAny = false;
        productCards.forEach(card => {
          const name = card.querySelector('h3').innerText.toLowerCase();
          if (name.includes(query)) {
            card.style.display = 'block';
            foundAny = true;
          } else {
            card.style.display = 'none';
          }
        });
  
        if (!foundAny) {
          productGrid.innerHTML = `<p class="text-white text-center w-full">No products found matching "${query}"</p>`;
        }
      }
    });
  
    // Optional: Reset if input is cleared
    searchInput.addEventListener('input', (e) => {
      if (!e.target.value.trim()) {
        resetSearch();
      }
    });
  
    function resetSearch() {
      productGrid.innerHTML = '';
      productCards.forEach(card => {
        card.style.display = 'block';
        productGrid.appendChild(card);
      });
    }
  });




  // PRODUCT PAGE
  const buttons = document.querySelectorAll('.tab-button');
    const content = document.getElementById('tab-content');

    const tabData = [
      `This powerful machine is built for extreme gaming. Engineered with the latest RTX 4080 graphics, 2TB NVMe, and liquid-cooled 14th Gen Intel CPU, it's made for those who want no limits.`,
      `<ul class='list-disc ml-6'><li>Motherboard: ASUS ROG STRIX Z790</li><li>Cooling: Corsair iCUE Liquid AIO</li><li>Ports: USB-C, HDMI, DisplayPort</li><li>WiFi 6 & Bluetooth 5.2</li></ul>`,
      `<p class='text-yellow-400'>★★★★★ - Best PC I've ever bought! Super fast and great cooling.</p><p class='mt-2'>★★★★★ - Worth every cent. Runs Cyberpunk on ultra with ray tracing, no sweat.</p>`
    ];

    buttons.forEach((btn, idx) => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('border-b-2', 'border-[#51ff00]'));
        btn.classList.add('border-b-2', 'border-[#51ff00]');
        content.innerHTML = tabData[idx];
      });
    });


    // PRODUCT IMAGE GALLERY
    function changeImage(src) {
      document.getElementById('mainImage').src = src;
    }
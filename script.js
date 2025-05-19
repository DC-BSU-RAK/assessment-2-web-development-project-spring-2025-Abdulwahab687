// Placeholder for future interactivity
document.addEventListener("DOMContentLoaded", () => {
  const cart = document.querySelector(".cart-icon");

  cart.addEventListener("click", () => {
    alert("Your cart is currently empty.");
  });

  const search = document.querySelector(".search-bar");

  search.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      alert(`Searching for "${search.value}"...`);
    }
  });
});

// Highlight navigation link on hover
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.color = '#ff2c2c';
  });
  link.addEventListener('mouseout', () => {
    link.style.color = '#ccc';
  });
});

// Floating Instagram icon click
document.addEventListener('DOMContentLoaded', () => {
  const instaIcon = document.querySelector('.chat-icon');
  if (instaIcon) {
    instaIcon.addEventListener('click', () => {
      window.open('http://instagram.com/royalfocus/', '_blank');
    });
  }
});

// Simple testimonial carousel (if applicable)
const testimonials = document.querySelectorAll('.testimonial');
let currentTestimonial = 0;

function showTestimonial(index) {
  testimonials.forEach((el, i) => {
    el.style.display = i === index ? 'block' : 'none';
  });
}

if (testimonials.length > 0) {
  showTestimonial(currentTestimonial);
  setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
  }, 5000); // Change every 5 seconds
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("pc-builder-form");
  const summary = document.getElementById("summary-output");

  const componentPrices = {
    cpu: {
      "intel-i9": { name: "Intel i9", price: 500 },
      "amd-ryzen-9": { name: "AMD Ryzen 9", price: 450 },
    },
    gpu: {
      "rtx-4090": { name: "NVIDIA RTX 4090", price: 1600 },
      "rx-7900xt": { name: "AMD RX 7900 XT", price: 900 },
    },
    ram: {
      "16gb": { name: "16 GB", price: 60 },
      "32gb": { name: "32 GB", price: 100 },
      "64gb": { name: "64 GB", price: 180 },
    },
    storage: {
      "1tb-ssd": { name: "1TB SSD", price: 100 },
      "2tb-hdd": { name: "2TB HDD", price: 80 },
    },
    cooling: {
      "air": { name: "Air Cooler", price: 40 },
      "liquid": { name: "Liquid Cooler", price: 100 },
    },
    addons: {
      "monitor": { name: "Monitor", price: 200 },
      "keyboard": { name: "Mechanical Keyboard", price: 80 },
    }
  };

  function updateSummary() {
    let total = 0;
    let summaryHTML = "<ul>";

    ["cpu", "gpu", "ram", "storage", "cooling", "addons"].forEach((component) => {
      const selectedValue = form[component].value;
      if (selectedValue && componentPrices[component][selectedValue]) {
        const item = componentPrices[component][selectedValue];
        total += item.price;
        summaryHTML += `<li><strong>${item.name}</strong>: $${item.price}</li>`;
      }
    });

    summaryHTML += `</ul><p><strong>Total Price:</strong> $${total}</p>`;
    summary.innerHTML = summaryHTML;
  }

  form.addEventListener("change", updateSummary);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("PC build added to cart!");
  });

  // Optional: Chat icon click to open Instagram
  const chatIcon = document.querySelector(".chat-icon");
  if (chatIcon) {
    chatIcon.addEventListener("click", () => {
      window.open("http://instagram.com/royalfocus", "_blank");
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const chatIcon = document.querySelector(".chat-icon");

  if (chatIcon) {
    chatIcon.addEventListener("click", () => {
      window.open("http://instagram.com/royalfocus", "_blank");
    });
  }

  const addToCartButtons = document.querySelectorAll(".btn");

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      alert("Item added to cart!");
    });
  });
});

// Optional enhancement for Shorts of PCs (auto-play on hover)
document.addEventListener("DOMContentLoaded", () => {
  const shortVideos = document.querySelectorAll(".short-card video");

  shortVideos.forEach(video => {
    video.addEventListener("mouseenter", () => video.play());
    video.addEventListener("mouseleave", () => video.pause());
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact-form form');

  form.addEventListener('submit', e => {
    e.preventDefault();

    // Simple validation (optional here since HTML required does most)
    if (!form.checkValidity()) {
      alert('Please fill out all required fields correctly.');
      return;
    }

    // Show success message (can customize)
    alert('Thank you for reaching out! We will get back to you soon.');

    // Optionally clear the form after submission
    form.reset();
  });
});

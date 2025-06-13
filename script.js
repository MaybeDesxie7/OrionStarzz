document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const productCards = document.querySelectorAll(".product-card");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.animation = "fadeInUp 1s ease-out forwards";
            }
        });
    }, { threshold: 0.2 });

    productCards.forEach((card) => {
        observer.observe(card);
    });
});

let index = 0;

function showTestimonial() {
    const slides = document.querySelectorAll(".testimonial-slide");
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${index * 100}%)`;
    });
}

function nextTestimonial() {
    const slides = document.querySelectorAll(".testimonial-slide");
    if (index < slides.length - 1) {
        index++;
    } else {
        index = 0;
    }
    showTestimonial();
}

function prevTestimonial() {
    const slides = document.querySelectorAll(".testimonial-slide");
    if (index > 0) {
        index--;
    } else {
        index = slides.length - 1;
    }
    showTestimonial();
}

document.addEventListener("DOMContentLoaded", showTestimonial);
document.addEventListener("DOMContentLoaded", function () {
    const blogContainer = document.querySelector(".blog-container");

    // Sample additional blogs (Could be fetched from a database in a real project)
    const extraBlogs = [
        {
            img: "images/blog4.jpg",
            title: "How to Improve Website Performance",
            text: "Learn techniques to make your website load faster and rank better.",
        },
        {
            img: "images/blog5.jpg",
            title: "The Role of AI in Web Development",
            text: "AI is changing how we build websites. Find out how you can use it!",
        },
    ];

    function loadMoreBlogs() {
        extraBlogs.forEach(blog => {
            const post = document.createElement("article");
            post.classList.add("blog-post");

            post.innerHTML = `
                <img src="${blog.img}" alt="${blog.title}">
                <h3>${blog.title}</h3>
                <p>${blog.text}</p>
                <a href="#" class="read-more">Read More</a>
            `;
            
            blogContainer.appendChild(post);
        });

        document.querySelector(".load-more-btn").style.display = "none"; // Hide button after loading
    }

    loadMoreBtn.addEventListener("click", loadMoreBlogs);
    document.querySelector(".blog-section").appendChild(loadMoreBtn);
});
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents form submission for demo purposes

        formMessage.classList.remove("hidden"); // Show success message

        // Optional: Clear form fields
        form.reset();

        // Hide message after 3 seconds
        setTimeout(() => {
            formMessage.classList.add("hidden");
        }, 3000);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll('.service-card');
  
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    }, {
      threshold: 0.3
    });
  
    cards.forEach(function (card) {
      observer.observe(card);
    });
  });
  document.addEventListener("DOMContentLoaded", () => {
    const hero = document.querySelector(".hero-section");
  
    if (hero) {
      hero.classList.add("fade-in-animation");
    }
  });
  ScrollReveal().reveal('.hero-title', {
    origin: 'top',
    distance: '40px',
    duration: 1000,
    delay: 200,
    reset: false
  });
  
  ScrollReveal().reveal('.hero-subtitle', {
    origin: 'bottom',
    distance: '30px',
    duration: 1000,
    delay: 400,
    reset: false
  });
  
  ScrollReveal().reveal('.hero-buttons', {
    origin: 'bottom',
    distance: '20px',
    duration: 1000,
    delay: 600,
    reset: false
  });
  
  ScrollReveal().reveal('.hero-image-container', {
    origin: 'bottom',
    distance: '20px',
    duration: 1200,
    delay: 800,
    reset: false
  });
// Animate on scroll
const heroContent = document.querySelector('.hero-content');
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    heroContent.classList.add('animate');
  }
});

  document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const current = +counter.innerText.replace(/\D/g, '');
        const increment = Math.ceil(target / 100);
  
        if (current < target) {
          counter.innerText = current + increment + '+';
          setTimeout(updateCount, 50);
        } else {
          counter.innerText = target + (counter.innerText.includes('%') ? '%' : counter.innerText.includes('/') ? '/7' : '+');
        }
      };
  
      updateCount();
    });
  });
  document.addEventListener("DOMContentLoaded", () => {
  const slideContainers = document.querySelectorAll(".orion-slideshow-container");

  slideContainers.forEach(container => {
    const slides = container.querySelectorAll(".orion-slide-image");
    let currentIndex = 0;

    setInterval(() => {
      slides[currentIndex].classList.remove("orion-active");
      currentIndex = (currentIndex + 1) % slides.length;
      slides[currentIndex].classList.add("orion-active");
    }, 3000); // Change every 3 seconds
  });
});

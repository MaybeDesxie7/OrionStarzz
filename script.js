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

    // Add "Load More" button
    const loadMoreBtn = document.createElement("button");
    loadMoreBtn.textContent = "Load More Posts";
    loadMoreBtn.classList.add("load-more-btn");
    loadMoreBtn.style.cssText = "margin-top:20px; padding: 10px 15px; font-size: 1rem; cursor: pointer; border: none; background: limegreen; color: white; border-radius: 5px;";
    
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
    const newsletterForm = document.getElementById("newsletterForm");
    const newsletterMessage = document.getElementById("newsletterMessage");

    newsletterForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent actual form submission

        newsletterMessage.classList.remove("hidden"); // Show success message

        // Optional: Clear the email input
        document.getElementById("newsletterEmail").value = "";

        // Hide message after 3 seconds
        setTimeout(() => {
            newsletterMessage.classList.add("hidden");
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
  

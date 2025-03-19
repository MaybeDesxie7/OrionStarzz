document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent immediate form submission

        // Get input values
        let fullName = document.getElementById("fullname").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();
        let errorDiv = document.getElementById("error-message");
        let successDiv = document.getElementById("success-message");

        errorDiv.innerHTML = ""; // Clear previous errors
        successDiv.innerHTML = ""; // Clear success messages

        // Basic validation
        if (fullName === "" || email === "" || message === "") {
            errorDiv.innerHTML = "❌ All fields are required!";
            return;
        }

        if (!validateEmail(email)) {
            errorDiv.innerHTML = "❌ Please enter a valid email address!";
            return;
        }

        // If validation passes, submit form using AJAX
        let formData = new FormData(contactForm);

        fetch("contact.php", {
            method: "POST",
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            if (data.includes("Message sent successfully!")) {
                successDiv.innerHTML = "✅ Your message has been sent!";
                contactForm.reset(); // Clear form after success
            } else {
                errorDiv.innerHTML = "❌ Error sending message. Try again!";
            }
        })
        .catch(error => {
            errorDiv.innerHTML = "❌ Network error. Please try again!";
        });
    });

    // Email validation function
    function validateEmail(email) {
        let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});

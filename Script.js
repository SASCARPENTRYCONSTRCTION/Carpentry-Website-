// Simple form submission message (no backend required)
const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    message.textContent = "Thank you! We will get back to you shortly.";
    form.reset();
});

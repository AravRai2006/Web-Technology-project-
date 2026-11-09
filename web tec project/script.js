// Find the theme button on the current page.
const themeButton = document.getElementById("themeButton");

// Toggle dark mode when the button is clicked.
themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeButton.textContent = "☀️";
    } else {
        themeButton.textContent = "🌙";
    }
});

// Only the Contact page has this form, so check that it exists first.
const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        // Keep the browser from reloading the page on submit.
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const formMessage = document.getElementById("formMessage");
        formMessage.textContent = `Thanks, ${name}! Your message is ready.`;
        contactForm.reset();
    });
}

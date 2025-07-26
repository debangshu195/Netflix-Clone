function validateEmail() {
    const email = document.getElementById("email").value.trim();
    if (email === "") {
        alert("Please enter your email address.");
    } else if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email address.");
    } else {
        alert("Thanks! You’ll receive an email shortly.");
        document.getElementById("email").value = "";
    }
}

function toggleFaq(clickedBox) {
    const answer = clickedBox.nextElementSibling;
    const isOpen = answer.style.display === "block";

    // Hide all answers
    document.querySelectorAll(".faq-answer").forEach(ans => {
        ans.style.display = "none";
    });

    // Toggle current
    answer.style.display = isOpen ? "none" : "block";
}

function toggleMode() {
    document.body.classList.toggle("dark-mode");
}

function toggleLanguageDropdown() {
        const dropdown = document.getElementById("language-options");
        dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    }

    function selectLanguage(language) {
        const button = document.getElementById("language-button");
        button.innerHTML = language + " ⌄";
        document.getElementById("language-options").style.display = "none";

        // You can add actual language translation logic here if needed.
        console.log("Language switched to:", language);
    }

    // Hide dropdown when clicking outside
    document.addEventListener("click", function (e) {
        const dropdown = document.getElementById("language-options");
        const button = document.getElementById("language-button");
        if (!button.contains(e.target) && !dropdown.contains(e.target)) {
            dropdown.style.display = "none";
        }
    });

 // Toggle Sign In Modal
function toggleSignInModal() {
    const modal = document.getElementById("signin-modal");
    modal.style.display = modal.style.display === "block" ? "none" : "block";
}

// Submit Sign In
function submitSignIn() {
    const email = document.getElementById("signin-email").value.trim();
    const password = document.getElementById("signin-password").value.trim();

    if (email === "" || password === "") {
        alert("Please fill in both fields.");
    } else {
        alert(`Logged in as: ${email}`);
        toggleSignInModal();
        document.getElementById("signin-email").value = "";
        document.getElementById("signin-password").value = "";
    }
}

window.addEventListener("click", function (e) {
    const modal = document.getElementById("signin-modal");
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
window.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        document.getElementById("signin-modal").style.display = "none";
    }
});


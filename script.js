// =============================
// 🌗 Light/Dark Mode Toggle
// =============================
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// =============================
// 🎮 Counter Game
// =============================
let count = 0;
const counterDisplay = document.getElementById("counterDisplay");
document.getElementById("increaseBtn").addEventListener("click", () => {
  count++;
  counterDisplay.textContent = "Count: " + count;
});
document.getElementById("resetBtn").addEventListener("click", () => {
  count = 0;
  counterDisplay.textContent = "Count: " + count;
});

// =============================
// ❓ FAQ Section (Collapsible)
// =============================
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach(question => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    answer.style.display = (answer.style.display === "block") ? "none" : "block";
  });
});

// =============================
// 📋 Form Validation
// =============================
const form = document.getElementById("signupForm");
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Stop form from submitting

  // Reset messages
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";
  document.getElementById("formSuccess").textContent = "";

  let valid = true;

  // Name validation: required, at least 3 characters
  const name = document.getElementById("name").value.trim();
  if (name.length < 3) {
    document.getElementById("nameError").textContent = "Name must be at least 3 characters.";
    valid = false;
  }

  // Email validation: regex
  const email = document.getElementById("email").value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent = "Please enter a valid email.";
    valid = false;
  }

  // Password validation: min 6 characters, must contain a number
  const password = document.getElementById("password").value;
  const passwordRegex = /^(?=.*\d).{6,}$/;
  if (!passwordRegex.test(password)) {
    document.getElementById("passwordError").textContent = "Password must be 6+ chars and include a number.";
    valid = false;
  }

  // Success message
  if (valid) {
    document.getElementById("formSuccess").textContent = "✅ Form submitted successfully!";
    form.reset();
  }
});
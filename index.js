const emailInput = document.getElementById("email");
const emailConfirmationInput = document.getElementById("emailconfirmed");
const emailMatchMessage = document.getElementById("emailMatchMessage");

emailConfirmationInput.addEventListener("input", () => {
  if (emailConfirmationInput.value === emailInput.value) {
    emailMatchMessage.textContent = "Emails match!";
    emailMatchMessage.style.color = "green";
  } else {
    emailMatchMessage.textContent = "Emails do not match!";
    emailMatchMessage.style.color = "red";
  }
});
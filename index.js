 window.addEventListener('load', function() {
    document.body.classList.add('loaded');
  });
  
const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const formData = new FormData();
  formData.append("name", nameInput.value);
  formData.append("email", emailInput.value);
  formData.append("message", messageInput.value);
  
  fetch("send-email.php", {
    method: "POST",
    body: formData
  })
  .then(response => {
    if(response.ok) {
      alert("Thank you for contacting us!");
    } else {
      alert("Oops! Something went wrong. Please try again later.");
    }
  })
  .catch(error => {
    alert("Oops! Something went wrong. Please try again later.");
  });
});

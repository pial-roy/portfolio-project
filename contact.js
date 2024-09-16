const form = document.getElementById('contact-form');
const confirmationMessage = document.getElementById('confirmation-message');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent default form submission

  const formData = new FormData(form);

  fetch(form.action, {
    method: form.method,
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      form.reset(); // Clear the form
      confirmationMessage.style.display = 'block'; // Show confirmation message
    } else {
      alert('Oops! There was a problem submitting your form.');
    }
  }).catch(error => {
    alert('Oops! There was a problem submitting your form.');
  });
});
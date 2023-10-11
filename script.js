document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const successMessage = document.getElementById('success-message');
    const errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Get form data
      const formData = new FormData(form);

      // Create and configure an XMLHttpRequest object
      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'send_email.php'); // Replace 'send_email.php' with the URL of your server-side script
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

      // Handle the response from the server
      xhr.onload = function () {
        if (xhr.status === 200) {
          // The email was sent successfully
          successMessage.style.display = 'block';
          errorMessage.style.display = 'none';
          form.reset();
        } else {
          // There was an error sending the email
          errorMessage.style.display = 'block';
          successMessage.style.display = 'none';
        }
      };

      // Send the form data to the server
      xhr.send(new URLSearchParams(formData));
    });
});
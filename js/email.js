window.onload = function () {
  document.getElementById('contact-form').addEventListener('submit', function (event) {
      event.preventDefault();
      emailjs.sendForm('default_service', 'template_2PpUZzMx', this
      ).then(function (response) {
          document.getElementById('success-alert').hidden = false;
      }, function(error) {
          document.getElementById('failed-alert').hidden = false;
      });
  });
}

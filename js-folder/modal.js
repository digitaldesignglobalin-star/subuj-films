document.addEventListener("DOMContentLoaded", function () {

  const modalElement = document.getElementById("enquiryModal");

  if (!modalElement) return;

  function showModal() {

    if (typeof bootstrap === "undefined") {
      console.log("Bootstrap not loaded");
      return;
    }     

    const modal = new bootstrap.Modal(modalElement);
    modal.show();

  }

  // show every time page loads
setTimeout(showModal, 3000);



  // form submit
  const form = document.getElementById("enquiryForm");

  if (form) {

    form.addEventListener("submit", function (e) {

      e.preventDefault();

      const formData = new FormData(form);

      fetch("send_mail.php", {
        method: "POST",
        body: formData,
      })
      .then(res => res.text())
      .then(data => {

        if (data === "success") {

          alert("Message sent");

        } else {

          alert("Error sending mail");

        }

      });

    });

  }

});
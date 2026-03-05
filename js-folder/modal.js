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

});


  // form submit

document.addEventListener("DOMContentLoaded", function () {
  let modal = document.getElementById("imageModal");
  let modalImg = document.getElementById("modalImage");
  let closeModal = document.getElementById("closeModal");

  let images = document.querySelectorAll(".preview-img");

  images.forEach(function (img) {
    img.addEventListener("click", function () {
      modal.style.display = "flex";
      modalImg.src = this.src;
    });
  });

  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});

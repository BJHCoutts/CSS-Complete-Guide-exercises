console.log("Yay!");
const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const modalButton = document.querySelector(".modal button");
const selectPlanButtons = document.querySelectorAll(".plan button");
const toggleButton = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");
const modalNoButton = document.querySelector(".modal__action--negative");

function closeModal() {
  backdrop.style.display = "none";
  if (modal) {
    modal.style.display = "none";
  }
}

for (let i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", function() {
    backdrop.classList.add("open");
    modal.classList.add("open");
    console.log("clicked");
  });
}

backdrop.addEventListener("click", function() {
  // closeModal;
  // modal.style.display = "none";
  // backdrop.style.display = "none";
  modal.classList.remove("open");
  backdrop.classList.remove("open");
});

toggleButton.addEventListener("click", function() {
  mobileNav.classList.add("open");
  backdrop.classList.add("open");
});

backdrop.addEventListener("click", function() {
  mobileNav.classList.remove("open");
  backdrop.classList.remove("open");
});

if (modalNoButton) {
  modalNoButton.addEventListener("click", closeModal);
}

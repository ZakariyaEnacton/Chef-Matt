// create variable for navbar
const toggleBtn = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn");
const sidebarToggle = document.querySelector(".sidebar-center");

// product page variables
const modal = document.querySelector(".modal-container");
const cardWrapper = document.querySelector(".product-card-wrapper");
const modalContainer = document.querySelector(".modal-container");
const modalContentWrapper = document.querySelector(".modal-content-wrapper");

// events

window.addEventListener("DOMContentLoaded", function () {
  // displayModal(modals);
});

const view = document.querySelectorAll(".view-btn");
view.forEach(function (event) {
  event.addEventListener("click", function (e) {
    e.preventDefault();

    modalContainer.classList.add("show-modal");
  });
});

const close = document.querySelector(".modal-btn");
close.addEventListener("click", function () {
  modalContainer.classList.remove("show-modal");
});

toggleBtn.addEventListener("click", function () {
  sidebarToggle.classList.add("hide-sidebar");
  sidebar.classList.add("show-sidebar");
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
  sidebarToggle.classList.remove("hide-sidebar");
});

// swiper funcrions
window.onload = () => {
  var swiper = new Swiper(".product-slider", {
    slidesPerView: 4,
    // spaceBetween: 10,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  var swiper = new Swiper(".banner-slider", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  var swiper = new Swiper(".slider-wrapper", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
};

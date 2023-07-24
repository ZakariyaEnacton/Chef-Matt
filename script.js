// create variable for navbar
const toggleBtn = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn");
const sidebarToggle = document.querySelector(".sidebar-center");
const links = document.querySelector(".links");
const navLink = document.querySelectorAll(".nav-link");
const option = document.querySelectorAll(".option");
// product page variables
const modal = document.querySelector(".modal-container");
const cardWrapper = document.querySelector(".product-card-wrapper");
const modalContainer = document.querySelector(".modal-container");
const modalContentWrapper = document.querySelector(".modal-content-wrapper");
const view = document.querySelectorAll(".view-btn");
const close = document.querySelector(".modal-btn");
const dropDown = document.querySelectorAll(".drop-down");
const filter = document.querySelector(".filter-opt");
const feature = document.querySelector(".feature-opt");

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

// events

//  toggle nav bar
toggleBtn.addEventListener("click", function () {
  sidebarToggle.classList.add("hide-sidebar");
  sidebar.classList.add("show-sidebar");
});

// close navbar
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
  sidebarToggle.classList.remove("hide-sidebar");
});

links.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = e.target;
  links.classList.add("active");
});
// modal open
view.forEach(function (event) {
  event.addEventListener("click", function (e) {
    e.preventDefault();
    modalContainer.classList.add("show-modal");
  });
});

//  modal close
close.addEventListener("click", function () {
  modalContainer.classList.remove("show-modal");
});

dropDown.forEach(function (event) {
  event.addEventListener("click", function (e) {
    if (e.currentTarget.classList.contains("filter")) {
      filter.classList.toggle("show-filter-opt");
    } else {
      feature.classList.toggle("show-feature-opt");
    }
  });
});

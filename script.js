// create variable for navbar
// alert("load");

const toggleBtn = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn");
const sidebarToggle = document.querySelector(".sidebar-center");
// const links = document.querySelectorAll(".nav-link");
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

function setNavigation() {
  let current_location = location.pathname.split("/")[1];
  if (current_location === "") return;
  let menu_items = document.querySelector(".links").getElementsByTagName("a");
  for (let i = 0, len = menu_items.length; i < len; i++) {
    if (menu_items[i].getAttribute("href").indexOf(current_location) !== -1) {
      menu_items[i].className = "nav-link active";
    }
  }
}
setNavigation();

// swiper funcrions
window.onload = () => {
  var swiper = new Swiper(".product-slider", {
    slidesPerView: 4,

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
    slidesPerView: 1,
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

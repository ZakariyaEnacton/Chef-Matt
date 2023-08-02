// create variable for navbar
// alert("load");

const toggleBtn = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn");
const sidebarToggle = document.querySelector(".sidebar-center");
// const links = document.querySelectorAll(".nav-link");
// product page variables
const cardWrapper = document.querySelector(".product-card-wrapper");
const popUp = document.querySelector(".modal");
const modalContentWrapper = document.querySelector(".modal-content-wrapper");
const view = document.querySelectorAll(".view-btn");
const close = document.querySelector(".modal-btn");
const dropDown = document.querySelectorAll(".drop-action");

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
  var swiper = new Swiper(".slider-wrapper", {
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  var swiper = new Swiper(".product-slider", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.3,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 2.3,
      },
      768: {
        slidesPerView: 2.5,
      },
      1024: {
        slidesPerView: 3.7,
      },
      1280: {
        slidesPerView: 4,
      },
      1440: {
        slidesPerView: 4,
      },
    },
  });
  var swiper = new Swiper(".banner-slider", {
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

// modal open
view.forEach(function (event) {
  event.addEventListener("click", function (e) {
    e.preventDefault();
    popUp.classList.add("show-modal");
    document.querySelector("body").style.overflow = "hidden";
  });
});

//  modal close
close.addEventListener("click", function () {
  popUp.classList.remove("show-modal");
  document.querySelector("body").style.overflow = "unset";
});

popUp.addEventListener("click", function (event) {
  if (event.target === popUp) {
    popUp.classList.remove("show-modal");
    document.querySelector("body").style.overflow = "unset";
  }
});

function closeFilter() {
  const openManus = document.querySelectorAll(".drop-menu");
  openManus.forEach(function (menus) {
    menus.classList.remove("show-option");
  });
}

dropDown.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    console.log(btn);
    const dropContent = btn.querySelector(".drop-menu");
    // console.log(dropContent);
    const shouldOpen = !dropContent.classList.contains("show-option");
    e.preventDefault();

    closeFilter();

    if (shouldOpen) {
      dropContent.classList.add("show-option");
    }
    e.stopPropagation();
  });
});

window.addEventListener("click", function (event) {
  if (event.target != dropDown) {
    // Moved the code here to its own function.
    closeFilter();
  }
});

// function showDropdown(id) {
//   const dropDown = document.querySelectorAll(".option");
//   for (var i = 0; i < dropDown.length; i++) {
//     const open = dropDown[i];
//     open.classList.remove("show-option");
//   }
//   document.getElementById(id).classList.add("show-option");
// }

// close dropdown clicked outside
window.onclick = function (event) {
  if (!event.target.matches(".drop-down")) {
    var dropdowns = document.querySelectorAll(".option");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show-option")) {
        openDropdown.classList.remove("show-option");
      }
    }
  }
};

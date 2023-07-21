// cards
const cards = [
  {
    id: 1,
    title: "CINNAMON HONEY",
    oldPrice: "$12.00",
    newPrice: "$9.00",
    image: "/images/img_18.png",
  },
  {
    id: 2,
    title: "COCONUT OIL",
    oldPrice: "$20.00",
    newPrice: "$15.00",
    image: "/images/img_19.png",
  },
  {
    id: 3,
    title: "MANGO HONEY",
    oldPrice: "$9.00",
    newPrice: "$6.00",
    image: "/images/img_20.png",
  },
  {
    id: 4,
    title: "HONEY HABANERO",
    oldPrice: "$12.00",
    newPrice: "$9.00",
    image: "/images/img_21.png",
  },
  {
    id: 5,
    title: "EXTRA VIRGIN COCONUT OIL",
    oldPrice: "$24.00",
    newPrice: "$19.99",
    image: "/images/img_10.png",
  },
  {
    id: 6,
    title: "DRY RED COOKING WINE",
    oldPrice: "$9.99",
    newPrice: "$7.99",
    image: "/images/img_11.png",
  },
  {
    id: 7,
    title: "INFUSED EXTRA VIRGIN OLIVE OIL",
    oldPrice: "$35.99",
    newPrice: "$29.99",
    image: "/images/img_12.png",
  },
  {
    id: 8,
    title: "KIWI GOURMET DRIED FRUIT",
    oldPrice: "$9.00",
    newPrice: "$6.00",
    image: "/images/img_13.png",
  },
  {
    id: 9,
    title: "EXTRA VIRGIN OLIVE OIL",
    oldPrice: "$24.99",
    newPrice: "$19.99",
    image: "/images/img_14.png",
  },
  {
    id: 10,
    title: "JALAPENO & SERRANO OLIVE OIL",
    oldPrice: "$24.99",
    newPrice: "$19.99",
    image: "/images/img_15.png",
  },
  {
    id: 11,
    title: "CARIBBEAN JERK OLIVE OIL",
    oldPrice: "$24.99",
    newPrice: "$19.99",
    image: "/images/img_16.png",
  },
  {
    id: 12,
    title: "BLACK TRUFFLE OLIVE OIL",
    oldPrice: "$24.99",
    newPrice: "$19.99",
    image: "/images/img_17.png",
  },
];
const modals = [
  {
    id: 1,
    title: "CINNAMON HONEY",
    oldPrice: "$12.00",
    newPrice: "$9.00",
    image: "/images/img_18.png",
    description: "Product Description",
  },
  {
    id: 2,
    title: "COCONUT OIL",
    oldPrice: "$20.00",
    newPrice: "$15.00",
    image: "/images/img_19.png",
    description: "Product Description",
  },
  {
    id: 3,
    title: "MANGO HONEY",
    oldPrice: "$9.00",
    newPrice: "$6.00",
    image: "/images/img_20.png",
    description: "Product Description",
  },
  {
    id: 4,
    title: "HONEY HABANERO",
    oldPrice: "$12.00",
    newPrice: "$9.00",
    image: "/images/img_21.png",
    description: "Product Description",
  },
  {
    id: 5,
    title: "EXTRA VIRGIN COCONUT OIL",
    oldPrice: "$24.00",
    newPrice: "$19.99",
    image: "/images/img_10.png",
    description: "Product Description",
  },
  {
    id: 6,
    title: "DRY RED COOKING WINE",
    oldPrice: "$9.99",
    newPrice: "$7.99",
    image: "/images/img_11.png",
    description: "Product Description",
  },
  {
    id: 7,
    title: "INFUSED EXTRA VIRGIN OLIVE OIL",
    oldPrice: "$35.99",
    newPrice: "$29.99",
    image: "/images/img_12.png",
    description: "Product Description",
  },
  {
    id: 8,
    title: "KIWI GOURMET DRIED FRUIT",
    oldPrice: "$9.00",
    newPrice: "$6.00",
    image: "/images/img_13.png",
    description: "Product Description",
  },
  {
    id: 9,
    title: "EXTRA VIRGIN OLIVE OIL",
    oldPrice: "$24.99",
    newPrice: "$19.99",
    image: "/images/img_14.png",
    description: "Product Description",
  },
  {
    id: 10,
    title: "JALAPENO & SERRANO OLIVE OIL",
    oldPrice: "$24.99",
    newPrice: "$19.99",
    image: "/images/img_15.png",
    description: "Product Description",
  },
  {
    id: 11,
    title: "CARIBBEAN JERK OLIVE OIL",
    oldPrice: "$24.99",
    newPrice: "$19.99",
    image: "/images/img_16.png",
    description: "Product Description",
  },
  {
    id: 12,
    title: "BLACK TRUFFLE OLIVE OIL",
    oldPrice: "$24.99",
    newPrice: "$19.99",
    image: "/images/img_17.png",
    description: "Product Description",
  },
];
// variable
// create variable for navbar
const toggleBtn = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn");
const sidebarToggle = document.querySelector(".sidebar-center");

// product page variables
const view = document.querySelectorAll(".view-btn");
const modal = document.querySelector(".modal-container");
const cardWrapper = document.querySelector(".product-card-wrapper");
// events

window.addEventListener("DOMContentLoaded", function () {
  displayCard(cards);
});

function displayCard(items) {
  let displayCards = items
    .map(function (item) {
      console.log(item);
      return ` <div class="product-details-card">
    <div class="product-card-image">
        <img src="${item.image}">
    </div>
    <div class="product-hover">
        <div class="fav-image">
            <a href=""><img src="/images/Favorite.png" alt="favicon" class="fav-icon"></a>
        </div>
        <div class="cart-image">
            <a href=""><img src="/images/cart.png" alt="cart" class="cart-icon"></a>
        </div>
        <div class="view-image">
            <a href="" class="view-btn" data-id="cinnamon-honey"><img src="/images/view.png"
                    alt="cart" class="view-icon"></a>
        </div>
    </div>
    <div class="product-card-bottom">
        <div class="product-card-bottom-wrapper">
            <div class="product-title">
                <h3>${item.title}</h3>
            </div>
            <div class="product-price">
                <div class="old-price">
                    <h6>${item.oldPrice}</h6>
                </div>
                <div class="new-price">
                    <h6>${item.newPrice}</h6>
                </div>
            </div>
        </div>
    </div>
</div>`;
    })
    .join("");

  cardWrapper.innerHTML = displayCards;
}

function modalCards(items) {
  let modalCardItem = items.map(function (item) {
    console.log(item);
  });
}
modalCards();
toggleBtn.addEventListener("click", function () {
  sidebarToggle.classList.add("hide-sidebar");
  sidebar.classList.add("show-sidebar");
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
  sidebarToggle.classList.remove("hide-sidebar");
});

view.forEach(function (element) {
  element.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("clicked");
  });
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

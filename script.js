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
const modalContainer = document.querySelector(".modal-container");
const modalContentWrapper = document.querySelector(".modal-content-wrapper");
// events

window.addEventListener("DOMContentLoaded", function () {
  displayCard(cards);
  displayModal(modals);
});

function displayCard(items) {
  let displayCards = items
    .map(function (item) {
      // console.log(item);
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

function displayModal(items) {
  let dislayModalItems = items
    .map(function (item) {
      // console.log(item);
      return ` <div
      class="modal-top-image"
      style="background-image: url(/images/modal-top-img.png)"
    >
      <div class="btn-close">
        <button class="modal-btn">
          <img src="/images/Close_round.png" alt="" />
        </button>
      </div>
    </div>
    <!-- modal details content -->
    <div class="modal-content">
      <div class="modal-image-view">
        <div class="modal-image">
          <img src="${item.image}" alt="image" />
        </div>
        <div class="product-share-wrapper">
          <p class="product-share-title">Share this product:</p>
          <div class="share-links">
            <a href="" class="media-links facebook"
              ><img src="/images/facebook.png" alt=""
            /></a>
            <a href="" class="media-links instagram"
              ><img src="/images/instagram.png" alt=""
            /></a>
            <a href="" class="media-links instagram"
              ><img src="/images/twitter.png" alt=""
            /></a>
            <a href="" class="media-links instagram"
              ><img src="/images/pinterest icon.png" alt=""
            /></a>
          </div>
        </div>
      </div>
      <div class="product-details">
        <div class="modal-product-title">
          <h3>${item.title}</h3>
        </div>
        <div class="modal-price-wrapper">
          <p class="modal-new-price">${item.newPrice}</p>
          <p class="modal-old-price">${item.oldPrice}</p>
        </div>
        <div class="product-description-wrapper">
          <p class="product-description">${item.description}</p>
        </div>
        <div class="add-cart-wrapper">
          <div class="add-cart-title-wrapper">
            <p class="add-cart-title">Quantity:</p>
          </div>
          <div class="btn-wrapper">
            <button class="cart-btn btn-decrement">-</button>
            <p class="count">1</p>
            <button class="cart-btn btn-increament">+</button>
          </div>
        </div>
        <div class="btn-action-wrapper">
          <button class="btn-action btn-add-to-cart">Add to cart</button>
          <button class="btn-action btn-add-to-wishlist">
            Add to wishlist
          </button>
        </div>
      </div>
    </div>
    <div
    class="modal-bottom-image"
    style="background-image: url(/images/modal-bottom-img.png)"
  ></div>
</div>
    `;
    })
    .join("");
  modalContainer.innerHTML = dislayModalItems;
}

toggleBtn.addEventListener("click", function () {
  sidebarToggle.classList.add("hide-sidebar");
  sidebar.classList.add("show-sidebar");
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
  sidebarToggle.classList.remove("hide-sidebar");
});

view.forEach((element) => {
  element.addEventListener("click", (event) => {
    event.preventDefault();
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

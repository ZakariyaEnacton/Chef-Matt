window.onload = () => {
  var swiper = new Swiper(".product-slider", {
    slidesPerView: 4,
    // spaceBetween: 5,

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
};

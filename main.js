
var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    centeredSlides: true,
    breakpoints: {
        768: {
            centeredSlides: false,
        }

    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
var swiperShop = new Swiper(".swShop", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: '.shop-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.sw-button-next',
        prevEl: '.sw-button-prev',
    },
})
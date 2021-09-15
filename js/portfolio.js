//swiper
var swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 3500,
        disableOnInteraction: true,
      },
});

function scrollWin() {
    window.scrollTo({
        top: 600,
        behavior: "smooth"
    });
  }
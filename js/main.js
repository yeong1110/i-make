$(function(){
    setSwiper('.infinite-swiper', {
        // Optional parameters
        slidesPerView: 3,
        // Navigation arrows
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
    
    });
    
    setSwiper('.imagine-wrap',{
      direction: "vertical",
      slidesPerView: 3,
      spaceBetween: 10,

        // spaceBetween: 10,
    })

})

const setSwiper = (id, object) => {
    new Swiper(id, object);
  }
  

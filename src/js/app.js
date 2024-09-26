// Swiper is plugin for handle carousel

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 3, 
    spaceBetween: 10, 
    centeredSlides: true,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // show 1 item when display set to mobile
      320: {   
        slidesPerView: 1, 
        spaceBetween: 10, 
      },
      // show 3 item when display set to tablet
      768: { 
        slidesPerView: 3, 
        spaceBetween: 10,
      },
      // show 4 item when display set to mobile
      1024: {
        slidesPerView: 4, 
        spaceBetween: 10,
      }
    }
  });
import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'
import { on } from '../helpers/dom'

export default function initHeroSwiper() {
  var heroSlider = new Swiper('.hero__swiper', {
    modules: [Pagination],
    loop: true,
    pagination: {
      el: '.hero__pagination',
      type: 'bullets',
      clickable: true,
    },
  })

  new Swiper('.partners__carousell', {
    modules: [Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: '30px',
    loop: true,
    // loopAdditionalSlides: 10,
    pagination: {
      el: '.partners__counter',
      type: 'fraction',
    },
    navigation: {
      nextEl: '#partnersNext',
      prevEl: '#partnersPrev',
    },
    breakpoints: {
      580: {
        slidesPerView: 4,
      },
      1000: {
        slidesPerView: 5,
        spaceBetween: '70px',
      },
    },
  })

  new Swiper('.promo__carousel', {
    modules: [Navigation],
    slidesPerView: 1,
    loop: true,
    spaceBetween: '40px',
    navigation: {
      nextEl: '.promo__btn_next',
      prevEl: '.promo__btn_prev',
    },
  })

  on(document, 'click', (e) => {
    var t = e.target

    if (t.closest('.hero__btn_prev')) {
      heroSlider.slidePrev()
    } else if (t.closest('.hero__btn_next')) {
      heroSlider.slideNext()
    }
  })
}

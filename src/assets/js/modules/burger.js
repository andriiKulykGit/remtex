import { $, on } from '../helpers/dom'
import { onScroll, offScroll } from '../helpers/utils'

export default function initBurger() {
  var burger = $('#burger')
  var overlay = $('#overlay')
  var menu = $('#' + burger.getAttribute('aria-controls'))

  on(burger, 'click', () => {
    var state = burger.getAttribute('aria-expanded') === 'true'

    burger.setAttribute('aria-expanded', !state)

    if (state) {
      reset()
    } else {
      menu.style.transition = 'transform 0.2s'
      menu.style.visibility = 'visible'
      menu.style.transform = 'translateX(0)'

      overlay.style.visibility = 'visible'
      overlay.style.opacity = 1

      offScroll()
    }
  })

  on(overlay, 'click', reset)

  on(window, 'resize', () => {
    if (window.innerWidth < 1000) reset()
  })

  function reset() {
    burger.setAttribute('aria-expanded', 'false')
    menu.style.transform = 'translateX(-100%)'
    overlay.style.opacity = 0

    setTimeout(() => {
      menu.style.transition = 'none'
    }, 200)

    onScroll()
  }
}

import { $ } from './dom'

export function offScroll() {
  $('body').classList.add('no-scroll')
}
export function onScroll() {
  $('body').classList.remove('no-scroll')
}
export function toggleScroll() {
  $('body').classList.toggle('no-scroll')
}

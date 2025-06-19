export function $(selector, scope = document) {
  return scope.querySelector(selector)
}
export function $$(selector, scope = document) {
  return Array.from(scope.querySelectorAll(selector))
}
export function on(element, event, handler) {
  if (element) {
    element.addEventListener(event, handler)
  }
}

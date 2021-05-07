export function hasClass (el, className) {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}

export function addClass (el, className) {
  if (hasClass(el, className)) {
    return
  }

  let newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}

export function getElementAttribute (el, name) {
  return el.getAttribute('data-' + name)
}

export function setElementAttribute (el, name, val) {
  el.setAttribute('data-' + name, val)
}
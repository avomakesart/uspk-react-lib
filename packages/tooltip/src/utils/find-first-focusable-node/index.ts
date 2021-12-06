import { FOCUSABLE_SELECTOR } from '../../constants'

function matches(node: HTMLElement, selector: string) {
  if (node.matches) {
    return node.matches(selector)
  }

  const matches = (node.ownerDocument || document).querySelectorAll(selector)
  let i = matches.length
  while (--i >= 0 && matches.item(i) !== node) return i > -1
}

export function findFirstFocusableNode(
  element: HTMLElement,
  onlyDescendants = true,
): HTMLElement | null {
  if (!onlyDescendants && matches(element, FOCUSABLE_SELECTOR)) {
    return element
  }

  return element.querySelector(FOCUSABLE_SELECTOR)
}

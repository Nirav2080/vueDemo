import type { DirectiveBinding } from 'vue'

interface HighlightElement extends HTMLElement {
  style: CSSStyleDeclaration
}

export default {
  mounted(el: HighlightElement, binding: DirectiveBinding): void {
    if (binding.value) {
      el.style.backgroundColor = (binding.arg as string) || '#ffeb3b'
      el.style.transition = 'background-color 0.3s ease'
    }
  },
  updated(el: HighlightElement, binding: DirectiveBinding): void {
    if (binding.value) {
      el.style.backgroundColor = (binding.arg as string) || '#ffeb3b'
    } else {
      el.style.backgroundColor = 'transparent'
    }
  },
}

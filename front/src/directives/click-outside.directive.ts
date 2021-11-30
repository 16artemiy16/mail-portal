/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */

import { Directive } from 'vue';

const clickOutsideDirective: Directive = {
  mounted(el, binding) {
    el._clickHandler = function (event: MouseEvent) {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value(event);
      }
    };
    document.body.addEventListener('click', el._clickHandler);
  },
  unmounted(el: any) {
    document.body.removeEventListener('click', el._clickHandler);
  },
};

export default clickOutsideDirective;

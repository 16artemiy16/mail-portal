/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */

import { Directive } from 'vue';

/**
 *   Calls the given callback each time there is a click outside of the host element.
 *   Can take an argument (which will be cast to boolean) to enable/disable the directive.
 *
 *   Param: {Function} - the function should be called on outside click
 *
 *   Argument: {boolean} - when true the directive will be disabled
 *
 *   @example
 *   In the example below clicking on the button causes counter increase, and click outside of it
 *   causes decrease (only if the current value is not an even number).
 *   <template>
 *     <div>
 *       <h1>Counter: {{ count }}</h2>
 *       <button
 *         v-click-outside:[count % 2 === 0]="counter = counter - 1"
 *         @click="counter = counter + 1"
 *       >
 *         Plus 1
 *       </button>
 *     </div>
 *   </template>
 */
const clickOutsideDirective: Directive = {
  mounted(el, binding) {
    el._clickHandlerIsActive = binding.arg === undefined || !!binding.arg;

    el._clickHandler = function (event: MouseEvent) {
      if (!(el === event.target || el.contains(event.target)) && el._clickHandlerIsActive) {
        binding.value(event);
      }
    };
    document.body.addEventListener('click', el._clickHandler);
  },
  updated(el, binding) {
    el._clickHandlerIsActive = binding.arg === undefined || !!binding.arg;
  },
  unmounted(el: any) {
    document.body.removeEventListener('click', el._clickHandler);
  },
};

export default clickOutsideDirective;

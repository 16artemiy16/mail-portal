<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppFormField',
  props: {
    validator: {
      type: Function,
    },
  },
  data() {
    return {
      value: null,
    };
  },
});
</script>

<template>
  <div class="app-form-field">
    <slot />
    {{ value }}
    <span class="app-form-field__error">
      <slot name="error" />
    </span>
  </div>
</template>

<style scoped lang="scss">
  .app-form-field {
    display: flex;
    flex-direction: column;

    &__error {
      color: indianred;
    }
  }
</style>

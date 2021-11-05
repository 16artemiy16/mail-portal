<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppInput',
  props: {
    modelValue: {
      type: String,
      default: '',
    },
  },
  computed: {
    model: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit('update:modelValue', value);
      },
    },
  },
});
</script>

<template>
  <input v-model="model" />
</template>

<style scoped>
  input {
    padding: 1rem;
  }
</style>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppButton',
  props: {
    link: [String, Object],
  },
});
</script>

<template>
  <router-link v-if="link" :to="link">
    <button v-bind="$attrs">
      <slot />
    </button>
  </router-link>

  <button v-else v-bind="$attrs">
    <slot />
  </button>
</template>

<style scoped>
</style>

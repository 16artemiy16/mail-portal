<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SignLayout',
});
</script>

<template>
  <div class="sign-layout">
    <slot />
  </div>
</template>

<style scoped>
  .sign-layout {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

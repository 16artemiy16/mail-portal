<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppIcon',
});
</script>

<template>
  <i class="app-icon" />
</template>

<style scoped lang="scss">
.app-icon {
  cursor: pointer;
  transition: .2s;

  &_md {
    font-size: 1.5rem;
  }

  &_lg {
    font-size: 2rem;
  }

  &:hover {
    transform: scale(1.25);
  }
}
</style>

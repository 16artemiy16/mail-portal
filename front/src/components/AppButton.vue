<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppButton',
  props: {
    link: [String, Object],
    // Allowed: default, text
    view: {
      type: String,
      default: 'default',
    },
  },
  computed: {
    btnClasses() {
      const { view } = this.$props;
      return `app-btn_view-${view}`;
    },
  },
  methods: {
    navigateIfLink() {
      if (this.link) {
        this.$router.push(this.link);
      }
    },
  },
});
</script>

<template>
  <button v-bind="$attrs" class="app-btn" :class="btnClasses" @click="navigateIfLink">
    <slot />
  </button>
</template>

<style scoped lang="scss">
  button {
    position: relative;
    &:before {
      content:'';
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      background: rgba(255,255,255,0.3);
      border-radius: 5px;
      transition: all .5s ease;
    }
    &:hover:before {
      width: 100%;
    }
  }

  button:hover:before {
    width: 100%;
  }

  .app-btn {
    cursor: pointer;
    padding: .75rem;

    &_view {
      &-default {
        background: antiquewhite;
        border: 1px grey solid;
      }
      &-text {
        background: none;
        border: none;
      }
    }
  }
</style>

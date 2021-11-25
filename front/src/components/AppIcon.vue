<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppIcon',
  props: {
    weight: {
      type: String,
      default: 's',
      validator: (val: string) => ['s', 'r'].includes(val),
    },
    name: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: 'md',
      validator: (val: string) => ['lg', 'md'].includes(val),
    },
    to: {
      type: Object,
    },
  },
  computed: {
    cls() {
      const weightCls = `fa${this.weight}`;
      const sizeCls = `app-icon_${this.size}`;
      const iconCls = `fa-${this.name}`;

      return [weightCls, sizeCls, iconCls];
    },
  },
  methods: {
    onClick() {
      const { to } = this.$props;
      if (to) {
        this.$router.push(to);
      }
    },
  },
});
</script>

<template>
  <i class="app-icon" :class="cls" @click="onClick" />
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

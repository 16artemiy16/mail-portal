<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppInput',
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    size: {
      default: 'md',
      validator: (val: string) => ['sm', 'md', 'lg'].includes(val),
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
    classList() {
      return `app-input_${this.$props.size}`;
    },
  },
  methods: {
    focus() {
      this.$refs.input.focus();
    },
  },
});
</script>

<template>
  <div class="app-input" :class="classList" @click="focus()">
    <div class="app-input__icon" @click.stop="">
      <slot name="left-icon"></slot>
    </div>
    <input v-model="model" v-bind="$attrs" ref="input" />
    <div class="app-input__icon" @click.stop="">
      <slot name="right-icon"></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @import "@/scss/colors.scss";

  .app-input {
    position: relative;
    display: flex;
    border: 1px $grey solid;
    border-radius: 4px;

    &_lg {
      padding: 1rem;
    }

    &_md {
      padding: 0.5rem;
    }

    &_sm {
      padding: 0.25rem;
    }

    &__icon {
      display: flex;
      align-items: center;
    }

    input {
      border: none !important;
      outline: none !important;
      flex: 1;
    }
  }
</style>

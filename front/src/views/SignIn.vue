<script lang="ts">
import { defineComponent } from 'vue';
import AppInput from '@/components/AppInput.vue';

export default defineComponent({
  name: 'SignIn',
  components: {
    AppInput,
  },
});
</script>

<template>
  <form class="sign-in">
    <AppInput placeholder="Email" />
    <AppInput placeholder="password" type="password" />
  </form>
</template>

<style>
</style>

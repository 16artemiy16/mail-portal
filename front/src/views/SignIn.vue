<script lang="ts">
import { defineComponent } from 'vue';
import AppInput from '@/components/AppInput.vue';
import AppButton from '@/components/AppButton.vue';
import SignLayout from '@/layouts/SignLayout.vue';

export default defineComponent({
  name: 'SignIn',
  components: {
    AppInput,
    AppButton,
    SignLayout,
  },
});
</script>

<template>
  <SignLayout>
    <form class="sign-in">
      <h1>Sign In</h1>
      <AppInput placeholder="Login" class="sign-in__row" />
      <AppInput placeholder="Password" type="password" class="sign-in__row" />
      <AppInput placeholder="Repeat password" type="password" class="sign-in__row" />
      <div class="sign-in__row sign-in__actions">
        <AppButton :link="{ name: 'SignUp' }" :view="'text'">Sign Up</AppButton>
        <AppButton>Sign In</AppButton>
      </div>
    </form>
  </SignLayout>
</template>

<style scoped lang="scss">
  .sign-in {
    width: 600px;
    display: flex;
    flex-direction: column;

    &__row {
      margin: 1rem 0;
    }

    &__actions {
      display: flex;
      justify-content: space-between;
    }
  }
</style>

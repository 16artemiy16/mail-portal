<script lang="ts">
import { defineComponent } from 'vue';
import AppInput from '@/components/AppInput.vue';
import AppButton from '@/components/AppButton.vue';
import SignLayout from '@/layouts/SignLayout.vue';

export default defineComponent({
  name: 'SignUp',
  components: {
    AppInput,
    AppButton,
    SignLayout,
  },
});
</script>

<template>
  <SignLayout>
    <form class="sign-up">
      <h1>Sign In</h1>
      <AppInput placeholder="Login" class="sign-up__row" />
      <AppInput placeholder="Password" type="password" class="sign-in__row" />
      <div class="sign-up__row sign-up__actions">
        <AppButton :link="{ name: 'SignIn' }" :view="'text'">Sign In</AppButton>
        <AppButton>Sign Up</AppButton>
      </div>
    </form>
  </SignLayout>
</template>

<style lang="scss">
  .sign-up {
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

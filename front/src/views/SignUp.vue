<script lang="ts">
import { defineComponent } from 'vue';
import SignLayout from '@/layouts/SignLayout.vue';

export default defineComponent({
  name: 'SignUp',
  created() {
    document.title = 'Sign Up';
  },
  components: {
    SignLayout,
  },
});
</script>

<template>
  <SignLayout>
    <form class="sign-up">
      <h1>Sign Up</h1>
      <AppFormField class="sign-up__row" >
        <AppInput placeholder="Login" />
      </AppFormField>
      <AppFormField class="sign-up__row">
        <AppInput placeholder="Password" type="password" />
      </AppFormField>
      <div class="sign-up__row sign-up__actions">
        <AppButton :link="{ name: 'SignIn' }" :view="'text'">Sign In</AppButton>
        <AppButton>Sign Up</AppButton>
      </div>
    </form>
  </SignLayout>
</template>

<style scoped lang="scss">
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

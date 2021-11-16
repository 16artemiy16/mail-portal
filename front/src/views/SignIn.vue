<script lang="ts">
import { defineComponent } from 'vue';
import SignLayout from '@/layouts/SignLayout.vue';
import AppFormField from '@/components/AppFormItem.vue';
import { minLength, notEmpty, validate } from '@/utils/validator.util';

type Data = {
  form: {
    login: string;
    password: string;
  };
  errors: {
    login: string | null;
    password: string | null;
  };
};

export default defineComponent<unknown, unknown, Data>({
  name: 'SignIn',
  components: {
    AppFormField,
    SignLayout,
  },
  created() {
    document.title = 'Sign In';
  },
  data() {
    return {
      form: {
        login: '',
        password: '',
      },
      errors: {
        login: null,
        password: null,
      },
    };
  },
  methods: {
    submit() {
      const { messages } = validate(this.form, {
        login: [notEmpty],
        password: [minLength(6)],
      });
      this.errors = { ...messages };
    },
  },
});
</script>

<template>
  <SignLayout>
    <form class="sign-in" @submit.prevent="">
      <h1>Sign In</h1>
      <AppFormField class="sign-in__row">
        <AppInput placeholder="Login" v-model="form.login"/>
        <template #error v-if="errors.login">{{ errors.login }}</template>
      </AppFormField>
      <AppFormField class="sign-in__row">
        <AppInput
          placeholder="Password"
          type="password"
          v-model="form.password"
        />
        <template #error v-if="errors.password">{{ errors.password }}</template>
      </AppFormField>
      <div class="sign-in__row sign-in__actions">
        <AppButton :link="{ name: 'SignUp' }" :view="'text'">Sign Up</AppButton>
        <AppButton @click.prevent="submit">Sign In</AppButton>
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

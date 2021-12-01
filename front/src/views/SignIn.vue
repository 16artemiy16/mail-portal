<script lang="ts">
import { defineComponent } from 'vue';
import SignLayout from '@/layouts/SignLayout.vue';
import AppFormField from '@/components/AppFormItem.vue';
import { minLength, notEmpty, validate } from '@/utils/validator.util';
import authService from '@/services/auth.service';

type Data = {
  form: {
    email: string;
    password: string;
  };
  errors: {
    email: string | null;
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
        email: '',
        password: '',
      },
      errors: {
        email: null,
        password: null,
      },
    };
  },
  methods: {
    async submit() {
      const { isValid, messages } = validate(this.form, {
        email: [notEmpty],
        password: [minLength(6)],
      });
      this.errors = { ...messages };
      if (isValid) {
        const { email, password } = this.form;
        try {
          await authService.auth({ email, password });
          await this.$router.push({ name: 'Mail' });
        } catch (err) {
          this.errors = { ...messages, email: err.msg };
        }
      }
    },
  },
});
</script>

<template>
  <SignLayout>
    <form class="sign-in" @submit.prevent="submit()">
      <h1>Sign In</h1>
      <AppFormField class="sign-in__row">
        <AppInput placeholder="Login" v-model="form.email"/>
        <template #error v-if="errors.email">{{ errors.email }}</template>
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

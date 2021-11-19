import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

import AppButton from '@/components/AppButton.vue';
import AppFormItem from '@/components/AppFormItem.vue';
import AppIcon from '@/components/AppIcon.vue';
import AppInput from '@/components/AppInput.vue';

import { store } from './store';

createApp(App)
  .use(router)
  .use(store)
  .component('AppButton', AppButton)
  .component('AppFormField', AppFormItem)
  .component('AppIcon', AppIcon)
  .component('AppInput', AppInput)
  .mount('#app');

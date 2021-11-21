<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MailboxMessagePage',
  props: {
    message: {
      type: Object,
      required: true,
    },
  },
});
</script>

<template>
    <h1>{{ message.topic }}</h1>
    <div class="msg__actions">
      <router-link :to="{ name: 'Mail' }">Back</router-link>
    </div>
    <div>{{ message.text }}</div>

</template>

<style scoped lang="scss">

</style>

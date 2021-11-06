<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MailboxMessages',
  data() {
    return {
      messages: new Array(50).fill(null).map((_, i) => ({
        topic: i,
      })),
    };
  },
});
</script>

<template>
  <div class="mailbox-messages">
    <div
      v-for="msg in messages"
      :key="msg.topic"
      class="mailbox-messages__item"
    >
      {{ msg.topic }}
    </div>
  </div>
</template>

<style scoped lang="scss">
  .mailbox-messages {
    overflow: scroll;
    flex: 1;

    &__item {
      display: flex;
    }
  }
</style>

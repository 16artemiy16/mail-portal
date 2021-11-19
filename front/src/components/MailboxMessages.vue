<script lang="ts">
import { defineComponent } from 'vue';
import MailboxMessageItem from '@/components/MailboxMessageItem.vue';
import { messages } from '@/store/sandboxes/mailbox.sandbox';

export default defineComponent({
  name: 'MailboxMessages',
  components: {
    MailboxMessageItem,
  },
  computed: {
    messages,
  },
});
</script>

<template>
  <div class="mailbox-messages">
    <MailboxMessageItem
      v-for="msg in messages"
      class="mailbox-messages__item"
      :key="msg.topic"
      :message="msg"
    />
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

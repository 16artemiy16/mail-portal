<script lang="ts">
import { defineComponent } from 'vue';
import { MessageI } from '@/interfaces/message.interface';
import MailboxMessageItem from '@/components/MailboxMessageItem.vue';

export default defineComponent({
  name: 'MailboxMessages',
  components: {
    MailboxMessageItem,
  },
  data() {
    return {
      messages: new Array(50).fill(null).map((_, i) => ({
        id: `${i}`,
        topic: `Message number ${i}`,
        isFavourite: false,
        isUnread: i % 2 === 0,
        from: 'admin@test.com',
        date: new Date(),
      })) as MessageI[],
    };
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

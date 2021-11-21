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
    <MailboxMessageItem
      v-for="msg in messages"
      class="d-flex"
      :key="msg.topic"
      :message="msg"
    />
</template>

<style scoped lang="scss">
</style>

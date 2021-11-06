<script lang="ts">
import { defineComponent } from 'vue';
import MailboxHeader from '@/components/MailboxHeader.vue';

export default defineComponent({
  name: 'Mailbox',
  components: {
    MailboxHeader,
  },
});
</script>

<template>
  <div class="mailbox">
    <MailboxHeader />
  </div>
</template>

<style scoped lang="scss">
</style>

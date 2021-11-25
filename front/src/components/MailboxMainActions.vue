<script lang="ts">
import { defineComponent } from 'vue';
import { selectedMsg } from '@/store/sandboxes/mailbox.sandbox';

export default defineComponent({
  name: 'MailboxMainActions',
  computed: {
    selectedMsg,
  },
});
</script>

<template>
  <div class="mailbox-actions">
    <template v-if="selectedMsg">
      <AppIcon name="arrow-left" :to="{ name: 'Mail' }" />
      <AppIcon name="archive" />
      <AppIcon name="trash" />
      <AppIcon name="envelope" />
    </template>
    <template v-else>
      <AppIcon name="ellipsis-v" />
    </template>
  </div>
</template>

<style scoped lang="scss">
@import "@/scss/colors.scss";

.mailbox-actions {
  border-bottom: 1px $pale-border solid;
  display: flex;
  padding: 0.75rem;

  > * {
    margin-right: 2rem;
  }
}
</style>

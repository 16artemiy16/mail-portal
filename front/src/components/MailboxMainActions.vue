<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MailboxMainActions',
});
</script>

<template>
  <div class="mailbox-actions">
    <AppIcon class="fas fa-arrow-left app-icon_md" />
  </div>
</template>

<style scoped lang="scss">
@import "@/scss/colors.scss";

.mailbox-actions {
  border-bottom: 1px $pale-border solid;
  display: flex;
  padding: 0.75rem;
}
</style>

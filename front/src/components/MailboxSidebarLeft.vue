<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MailboxSidebarLeft',
});
</script>

<template>
  <div class="mailbox-sidebar mailbox-sidebar_opened">
    sidebar
  </div>
</template>

<style scoped lang="scss">
  .mailbox-sidebar {
    &_opened {
      width: 20%
    }
  }
</style>

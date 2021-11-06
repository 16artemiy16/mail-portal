<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MailboxSidebarRight',
});
</script>

<template>
  <div class="mailbox-sidebar-right">
  </div>
</template>

<style scoped lang="scss">
  @import "@/scss/colors.scss";

  .mailbox-sidebar-right {
    border-left: 1px solid $pale-border;
    width: 50px;
  }
</style>

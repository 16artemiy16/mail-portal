<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MailboxSidebarLeft',
  props: {
    opened: Boolean,
  },
});
</script>

<template>
  <div class="mailbox-sidebar" :class="{ 'mailbox-sidebar_opened': opened }">
    sidebar
  </div>
</template>

<style scoped lang="scss">
  .mailbox-sidebar {
    transition: width .1s ease;
    width: 70px;

    &_opened {
      width: 300px;
    }
  }
</style>

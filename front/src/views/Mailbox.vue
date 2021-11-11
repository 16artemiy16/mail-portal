<script lang="ts">
import { defineComponent } from 'vue';
import MailboxHeader from '@/components/MailboxHeader.vue';
import MailboxSidebarLeft from '@/components/MailboxSidebarLeft.vue';
import MailboxMessages from '@/components/MailboxMessages.vue';
import MailboxSidebarRight from '@/components/MailboxSidebarRight.vue';

export default defineComponent({
  name: 'Mailbox',
  components: {
    MailboxHeader,
    MailboxSidebarLeft,
    MailboxMessages,
    MailboxSidebarRight,
  },
  data() {
    return {
      isOpenedLeftSidebar: true,
    };
  },
  methods: {
    toggleLeftSidebar() {
      this.isOpenedLeftSidebar = !this.isOpenedLeftSidebar;
    },
  },
});
</script>

<template>
  <div class="mailbox">
    <MailboxHeader v-on:toggleLeftSidebar="toggleLeftSidebar()"/>
    <div class="d-flex h-100">
      <MailboxSidebarLeft :opened="isOpenedLeftSidebar" />
      <MailboxMessages />
      <MailboxSidebarRight />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .mailbox {
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';

import MailboxHeader from '@/components/MailboxHeader.vue';
import MailboxSidebarLeft from '@/components/MailboxSidebarLeft.vue';
import MailboxMessages from '@/components/MailboxMessages.vue';
import MailboxSidebarRight from '@/components/MailboxSidebarRight.vue';
import { StateI } from '@/store';

export default defineComponent({
  name: 'Mailbox',
  components: {
    MailboxHeader,
    MailboxSidebarLeft,
    MailboxMessages,
    MailboxSidebarRight,
  },
  created() {
    document.title = 'Mailbox';
  },
  computed: {
    ...mapState({
      isLeftSidebarExpanded: (state) => (state as StateI).mailbox.isLeftSidebarExpanded,
    }),
  },
  methods: {
    ...mapMutations('mailbox', ['toggleLeftSidebar']),
  },
});
</script>

<template>
  <div class="mailbox">
    <MailboxHeader v-on:toggleLeftSidebar="toggleLeftSidebar()"/>
    <div class="d-flex h-100">
      <MailboxSidebarLeft :opened="isLeftSidebarExpanded" />
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

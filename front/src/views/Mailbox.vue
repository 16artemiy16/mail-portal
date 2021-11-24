<script lang="ts">
import { defineComponent } from 'vue';

import MailboxHeader from '@/components/MailboxHeader.vue';
import MailboxSidebarLeft from '@/components/MailboxSidebarLeft.vue';
import MailboxMessages from '@/components/MailboxMessages.vue';
import MailboxSidebarRight from '@/components/MailboxSidebarRight.vue';
import MailboxMessagePage from '@/components/MailboxMessagePage.vue';

import {
  fetchMsgs,
  isLeftSidebarExpanded,
  selectedMsg,
  setSelectedMsg,
} from '@/store/sandboxes/mailbox.sandbox';
import MailboxMainActions from '@/components/MailboxMainActions.vue';

export default defineComponent({
  name: 'Mailbox',
  components: {
    MailboxMainActions,
    MailboxHeader,
    MailboxSidebarLeft,
    MailboxMessages,
    MailboxSidebarRight,
    MailboxMessagePage,
  },
  created() {
    document.title = 'Mailbox';
    this.fetchMsgs();
  },
  computed: {
    isLeftSidebarExpanded,
    selectedMsg,
  },
  methods: {
    setSelectedMsg,
    fetchMsgs,
  },
  watch: {
    '$route.params.msgId': {
      handler(newMsgId) {
        this.setSelectedMsg(newMsgId || null);
      },
    },
  },
});
</script>

<template>
  <div class="mailbox">
    <MailboxHeader />
    <div class="d-flex h-100">
      <MailboxSidebarLeft :opened="isLeftSidebarExpanded" />
      <div class="mailbox__main">
        <MailboxMainActions />
        <div class="mailbox__content">
          <MailboxMessagePage v-if="selectedMsg" :message="selectedMsg"/>
          <MailboxMessages v-else/>
        </div>
      </div>
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

    &__main {
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    &__content {
      overflow: scroll;
      display: flex;
      flex-direction: column;
    }
  }
</style>

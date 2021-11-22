<script lang="ts">
import { defineComponent } from 'vue';
import { toggleLeftSidebar } from '@/store/sandboxes/mailbox.sandbox';

export default defineComponent({
  name: 'MailboxHeader',
  methods: {
    toggleLeftSidebar,
  },
});
</script>

<template>
  <div class="header">
    <AppIcon name="bars" size="lg" @click="toggleLeftSidebar" />
    <div class="header__logo">Logo</div>
    <AppInput class="header__search" placeholder="Search in mail...">
      <template #left-icon>
        <AppIcon name="search" />
      </template>
    </AppInput>
    <div class="flex-spacer"></div>
    <AppIcon weight="r" size="lg" name="question-circle" class="mx-2" />
    <AppIcon size="lg" name="cog" class="mx-2" />
    <AppIcon size="lg" name="user-circle" class="mx-2" />
  </div>
</template>

<style scoped lang="scss">
  @import "@/scss/colors.scss";

  .header {
    display: flex;
    align-items: center;
    padding: 1rem;
    border: 1px solid $pale-border;

    &__logo {
      margin: 0 5rem;
    }

    &__search {
      width: 450px;
    }
  }
</style>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MailboxHeader',
});
</script>

<template>
  <div class="header">
    <AppIcon class="fas fa-bars app-icon_lg" />
    <div class="header__logo">Logo</div>
    <AppInput class="header__search" placeholder="Search in mail...">
      <template #left-icon>
        <AppIcon class="fas fa-search"></AppIcon>
      </template>
    </AppInput>
    <div class="flex-spacer"></div>
    <AppIcon class="far fa-question-circle app-icon_lg mx-2" />
    <AppIcon class="fas fa-cog app-icon_lg mx-2" />
    <AppIcon class="fas fa-user-circle app-icon_lg mx-2" />
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

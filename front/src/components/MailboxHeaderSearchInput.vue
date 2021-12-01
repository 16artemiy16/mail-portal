<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MailboxHeaderSearchInput',
  data() {
    return {
      areSettingsOpened: false,
      settings: [
        { id: 'from', label: 'From' },
        { id: 'to', label: 'To' },
        { id: 'including-words', label: 'Including words' },
        { id: 'excluding-words', label: 'Excluding words' },
      ],
    };
  },
  methods: {
    toggleSettings(flag?: boolean) {
      this.areSettingsOpened = flag !== undefined ? flag : !this.areSettingsOpened;
    },
    createFilter() {
      // TODO: mock
      this.areSettingsOpened = false;
    },
    search() {
      // TODO: mock
      this.areSettingsOpened = false;
    },
  },
});

</script>

<template>
  <div class="mail-search" v-click-outside:[areSettingsOpened]="() => toggleSettings(false)">
    <AppInput placeholder="Search in mail..." size="lg">
      <template #left-icon>
        <AppIcon name="search" />
      </template>
      <template #right-icon>
        <AppIcon name="sliders-h" @click="() => toggleSettings()" />
      </template>
    </AppInput>
    <div class="settings" v-show="areSettingsOpened">
      <div class="settings__row" v-for="item in settings" :key="item.id">
        <label :for="item.id" class="settings__label">{{ item.label }}</label>
        <AppInput size="sm" :id="item.id" class="settings__input" />
      </div>
      <div class="settings__row settings__actions">
        <AppButton view="text" @click="createFilter">Create Filter</AppButton>
        <AppButton @click="search">Search</AppButton>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .mail-search {
    position: relative;

    .settings {
      z-index: 1;
      background: white;
      position: absolute;
      left: 0;
      right: 0;
      border: 1px black solid;
      padding: 1rem;

      &__row {
        display: flex;

        &:not(:first-child) {
          margin-top: 1.5rem;
        }

        &:not(:last-child) {
          margin-bottom: 1.5rem;
        }
      }

      &__actions {
        justify-content: flex-end;
      }

      &__label {
        flex-basis: 150px;
        display: flex;
        align-items: center;
      }

      &__input {
        flex: 1;
      }
    }
  }
</style>

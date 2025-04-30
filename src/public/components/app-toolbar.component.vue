<script>
import AppLanguageSwitcher from './app-language-switcher.component.vue'

export default {
  name: "app-toolbar",
  components: {
    AppLanguageSwitcher
  }
}
</script>

<template>
  <pv-toolbar class="mb-4">
    <template #start>
      <h2 class="m-0">{{ $t('title') }}</h2>
    </template>
    <template #end>
      <app-language-switcher />
    </template>
  </pv-toolbar>
</template>

<style scoped>
h2 {
  font-size: 1.5rem;
  margin: 0;
}
</style>
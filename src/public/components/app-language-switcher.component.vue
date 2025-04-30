<script>
export default {
  name: "app-language-switcher",
  data() {
    return {
      languages: ['en', 'es'],
      language: 'en'
    }
  }
}
</script>

<template>
  <pv-select-button v-model="$i18n.locale" :options="languages" class="uppercase ml-2" aria-label="Language Switcher"/>
</template>

<style scoped>

</style>
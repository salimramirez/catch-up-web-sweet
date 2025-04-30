<script>
export default {
  name: "episode-item",
  props: {
    episode: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>
  <pv-card class="mb-3">
    <template #header>
      <img :src="episode.image" :alt="episode.name" class="w-full h-auto"/>
    </template>
    <template #body>
      {{ episode.name }}
    </template>
    <template #subtitle>
      Season {{ episode.season }} - Episode {{ episode.number }}
    </template>
    <!--
    <template #subtitle>
      {{ $t('episode.season') }} {{ episode.season }} - {{ $t('episode.episode') }} {{ episode.number }}
    </template>
    -->
    <template #content>
      <div v-html="episode.summary"></div>
    </template>
    <template #footer>
      <a :href="episode.url" target="_blank" rel="noopener">
        <pv-button label="View on TVMaze" icon="pi pi-external-link" aria-label="View on TVMaze" />
        <!-- <pv-button :label="$t('episode.view-link')" icon="pi pi-external-link" /> -->
      </a>
    </template>
  </pv-card>
</template>

<style scoped>
img {
  object-fit: cover;
  max-height: 200px;
  border-radius: 15px;
}
</style>
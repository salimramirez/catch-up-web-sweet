<script>
import EpisodeItem from "./episode-item.component.vue";

export default {
  name: "episode-list",
  components: {
    EpisodeItem
  },
  props: {
    episodes: {
      type: Array,
      required: true
    }
  }
}
</script>

<template>
  <div class="grid gap-3">
    <div v-for="episode in episodes" :key="episode.id" class="col-12 md:col-6 lg:col-3">
      <episode-item :episode="episode" />
    </div>
  </div>
</template>

<style scoped>
  .grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>
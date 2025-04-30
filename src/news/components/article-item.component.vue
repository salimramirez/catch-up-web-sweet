<script>
export default {
  name: "article-item",
  props: {
    article: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>
  <pv-card class="mb-3">
    <template #header>
      <img
          v-if="article.imageUrl"
          :src="article.imageUrl"
          :alt="article.title"
          class="w-full h-auto"
      />
    </template>

    <template #body>
      <h3 class="font-bold text-lg">{{ article.title }}</h3>
    </template>

    <template #subtitle>
      <span>{{ article.sourceName }} · {{ article.author }}</span>
    </template>

    <template #content>
      <p>{{ article.description }}</p>
    </template>

    <template #footer>
      <a :href="article.url" target="_blank" rel="noopener">
        <pv-button label="Read More" icon="pi pi-external-link" />
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
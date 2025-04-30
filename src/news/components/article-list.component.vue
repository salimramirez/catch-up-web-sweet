<script>
import ArticleItem from './article-item.component.vue';

export default {
  name: 'article-list',
  components: { ArticleItem },
  props: {
    articles: {
      type: Array,
      required: true
    }
  }
}
</script>

<template>
  <div class="grid gap-3">
    <div
        v-for="article in articles"
        :key="article.url"
        class="col-12 md:col-6 lg:col-4"
    >
      <article-item :article="article" />
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
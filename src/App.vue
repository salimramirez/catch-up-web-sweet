<script>
import EpisodeList from "./shows/components/episode-list.component.vue";
import RecipeList from "./recipes/components/recipe-list.component.vue";
import LaureateList from "./laureates/components/laureate-list.component.vue";
import ArticleList from "./news/components/article-list.component.vue";
import AppToolbar from "./public/components/app-toolbar.component.vue";
import AppFooter from "./public/components/app-footer.component.vue";
import { TvmazeApiService } from "./shows/services/tvmaze-api.service.js";
import { FakeRecipesApiService } from "./recipes/services/fake-recipes-api.service.js";
import { NobelApiService } from "./laureates/services/nobel-api.service.js";
import { NewsApiService } from "./news/services/news-api.service.js";

export default {
  name: "app",
  components: {
    EpisodeList,
    RecipeList,
    LaureateList,
    ArticleList,
    AppToolbar,
    AppFooter,
  },
  data() {
    return {
      episodes: [],
      recipes: [],
      laureates: [],
      articles: []
    }
  },
  mounted() {
    const service = new TvmazeApiService()
    service.getEpisodes().then((data) => {
      this.episodes = data
    });

    const recipeService = new FakeRecipesApiService();
    recipeService.getRecipes().then((data) => {
      this.recipes = data;
    });

    const laureateService = new NobelApiService();
    laureateService.getLaureates().then((data) => {
      this.laureates = data;
    });

    const articleService = new NewsApiService();
    articleService.getArticles().then((data) => {
      this.articles = data;
    });
  }
}
</script>

<template>
  <div class="p-4">
    <app-toolbar />

    <!-- Mostrar episodios -->
    <episode-list v-if="episodes.length" :episodes="episodes" />
    <p v-else>Loading episodes...</p>

    <!-- Mostrar recetas -->
    <h2 class="text-xl font-semibold mt-6 mb-2">Recipes</h2>
    <recipe-list v-if="recipes.length" :recipes="recipes" />
    <p v-else>Loading recipes...</p>

    <!-- Laureates -->
    <h2 class="text-xl font-semibold mt-6 mb-2">Nobel Laureates</h2>
    <laureate-list v-if="laureates.length" :laureates="laureates" />
    <p v-else>Loading laureates...</p>

    <!-- News -->
    <h2 class="text-xl font-semibold mt-6 mb-2">News Articles</h2>
    <article-list v-if="articles.length" :articles="articles" />
    <p v-else>Loading articles...</p>

    <app-footer />
  </div>
</template>

<style scoped>

</style>

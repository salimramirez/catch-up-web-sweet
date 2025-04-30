<script>
import RecipeItem from './recipe-item.component.vue';

export default {
  name: 'recipe-list',
  components: {
    RecipeItem
  },
  props: {
    recipes: {
      type: Array,
      required: true
    }
  }
}
</script>

<template>
  <div class="grid gap-3">
    <div
        v-for="recipe in recipes"
        :key="recipe.id"
        class="col-12 md:col-6 lg:col-3"
    >
      <recipe-item :recipe="recipe" />
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
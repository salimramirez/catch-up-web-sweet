<script>
export default {
  name: "recipe-item",
  props: {
    recipe: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>
  <pv-card class="mb-3">
    <template #header>
      <img :src="recipe.image" :alt="recipe.name" class="w-full h-auto" />
    </template>

    <template #body>
      <h3 class="font-semibold text-lg mb-1">{{ recipe.name }}</h3>
    </template>

    <template #subtitle>
      <span>{{ recipe.cuisine }} cuisine · {{ recipe.difficulty }} · {{ recipe.rating }} ⭐</span>
    </template>

    <template #content>
      <p><strong>Ingredients:</strong></p>
      <ul class="pl-5 list-disc">
        <li v-for="(ingredient, index) in recipe.ingredients" :key="'ing-' + index">
          {{ ingredient }}
        </li>
      </ul>

      <p class="mt-2"><strong>Instructions:</strong></p>
      <ol class="pl-5 list-decimal">
        <li v-for="(step, index) in recipe.instructions" :key="'step-' + index">
          {{ step }}
        </li>
      </ol>
    </template>

    <template #footer>
      <p class="text-sm text-gray-500">
        Prep: {{ recipe.prepTimeMinutes }} mins ·
        Cook: {{ recipe.cookTimeMinutes }} mins ·
        Servings: {{ recipe.servings }} ·
        {{ recipe.caloriesPerServing }} kcal/serving
      </p>
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
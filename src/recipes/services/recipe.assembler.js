import { Recipe } from '../model/recipe.entity.js';

export class RecipeAssembler {
    static toEntityFromResource(resource) {
        return new Recipe({
            id: resource.id,
            name: resource.name,
            ingredients: resource.ingredients,
            instructions: resource.instructions,
            prepTimeMinutes: resource.prepTimeMinutes,
            cookTimeMinutes: resource.cookTimeMinutes,
            servings: resource.servings,
            difficulty: resource.difficulty,
            cuisine: resource.cuisine,
            caloriesPerServing: resource.caloriesPerServing,
            image: resource.image,
            rating: resource.rating
        })
    }

    static toEntitiesFromResponse(response) {
        // if (response.data.status !== "ok") {
        //     console.error(`${response.status},  ${response.code}, ${response.message}`);
        //     return [];
        // }
        const recipesResponse = response.data.recipes;
        // const recipesResponse = response.data;
        if (!Array.isArray(recipesResponse)) {
            console.error('Invalid format: expected an array under "recipes"');
            return [];
        }
        // return recipesResponse.map(this.toEntityFromResource);
        return recipesResponse.map((recipe) => {
            return this.toEntityFromResource(recipe);
        });
        // return recipesResponse.recipes.map((recipe) => {
        //     return this.toEntityFromResource(recipe);
        // });
    }
}
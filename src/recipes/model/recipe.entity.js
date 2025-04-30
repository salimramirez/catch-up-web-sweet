export class Recipe {
    constructor({
        id, name, ingredients, instructions,
        prepTimeMinutes, cookTimeMinutes,
        servings, difficulty, cuisine,
        caloriesPerServing, image, rating
                }) {
        this.id = id;
        this.name = name;
        this.ingredients = ingredients;
        this.instructions = instructions;
        this.prepTimeMinutes = prepTimeMinutes;
        this.cookTimeMinutes = cookTimeMinutes;
        this.servings = servings;
        this.difficulty = difficulty;
        this.cuisine = cuisine;
        this.caloriesPerServing = caloriesPerServing;
        this.image = image;
        this.rating = rating;
    }
}
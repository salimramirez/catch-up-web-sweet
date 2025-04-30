import axios from "axios";
import { RecipeAssembler } from "./recipe.assembler.js";

const baseUrl = import.meta.env.VITE_RECIPES_BASE_URL;
const recipesPath = import.meta.env.VITE_RECIPES_RECIPES_ENDPOINT_PATH;

const http = axios.create({
    baseURL: baseUrl
})

export class FakeRecipesApiService {
    getRecipes() {
        return http.get(recipesPath)
            .then(response => RecipeAssembler.toEntitiesFromResponse(response))
            .catch(error => {
                console.error('Failed to get recipes', error);
                return [];
            });
    }
}
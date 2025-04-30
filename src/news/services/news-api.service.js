import axios from "axios";
import { ArticleAssembler } from "./article.assembler.js";

const baseUrl = import.meta.env.VITE_NEWS_API_BASE_URL;
const path = import.meta.env.VITE_NEWS_ENDPOINT_PATH;

const http = axios.create({
    baseURL: baseUrl
});

export class NewsApiService {
    getArticles() {
        return http.get(path)
            .then(response => ArticleAssembler.toEntitiesFromResponse(response))
            .catch(error => {
                console.error('Failed to fetch articles:', error);
                return [];
            });
    }
}
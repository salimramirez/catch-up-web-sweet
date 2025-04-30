import { Article } from "../model/article.entity.js";

export class ArticleAssembler {
    static toEntityFromResource(resource) {
        return new Article({
            title: resource.title,
            author: resource.author,
            sourceName: resource.source?.name || "Unknown",
            description: resource.description,
            url: resource.url,
            imageUrl: resource.urlToImage,
            publishedAt: resource.publishedAt
        });
    }

    static toEntitiesFromResponse(response) {
        const articlesResponse = response.data;

        return articlesResponse["articles"].map((article) => {
            return this.toEntityFromResource(article);
        });
    }
}
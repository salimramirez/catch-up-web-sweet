export class Article {
    constructor({
                    title, author, sourceName, description,
                    url, imageUrl, publishedAt
                }) {
        this.title = title;
        this.author = author;
        this.sourceName = sourceName;
        this.description = description;
        this.url = url;
        this.imageUrl = imageUrl;
        this.publishedAt = publishedAt;
    }
}
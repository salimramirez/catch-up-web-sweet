import { Episode } from '../model/episode.entity.js';

export class EpisodeAssembler {
    /**
     * Transforms a single resource object to an Episode entity.
     * @param {Object} resource - Raw object from API
     * @returns {Episode} Mapped entity
     */
    static toEntityFromResource(resource) {
        return new Episode({
            id: resource.id,
            name: resource.name,
            season: resource.season,
            number: resource.number,
            summary: resource.summary,
            url: resource.url,
            image: resource.image
        })
    }

    /**
     * Transforms a full response (array of episodes) to entity list.
     * @param {Object} response - Axios response object
     * @returns {Episode[]} Array of mapped entities
     */
    static toEntitiesFromResponse(response) {
        if (!Array.isArray(response.data)) {
            console.error('Invalid response format');
            return []
        }
        return response.data.map(this.toEntityFromResource);
    }
}
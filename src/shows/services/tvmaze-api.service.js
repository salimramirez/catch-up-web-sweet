import axios from 'axios';
import { EpisodeAssembler } from "./episode.assembler.js";

const baseUrl = import.meta.env.VITE_BASE_URL;
const episodesPath = import.meta.env.VITE_EPISODES_ENDPOINT_PATH;

const http = axios.create({
    baseURL: baseUrl
})

export class TvmazeApiService {
    getEpisodes() {
        return http.get(episodesPath)
            .then(response => EpisodeAssembler.toEntitiesFromResponse(response))
            .catch(error => {
                console.error('Failed to fetch episodes:', error);
                return [];
            })
    }
}
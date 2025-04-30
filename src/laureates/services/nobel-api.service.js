import axios from "axios";
import { LaureateAssembler } from "./laureate.assembler.js";

const baseUrl = import.meta.env.VITE_NOBEL_PRIZE_BASE_URL;
const laureatesPath = import.meta.env.VITE_NOBEL_LAUREATES_ENDPOINT_PATH;

const http = axios.create({
    baseURL: baseUrl
});

export class NobelApiService {
    getLaureates() {
        return http.get(laureatesPath)
            .then(response => LaureateAssembler.toEntitiesFromResponse(response))
            .catch(error => {
                console.error('Failed to get Laureates', error);
                return [];
            });
    }
}
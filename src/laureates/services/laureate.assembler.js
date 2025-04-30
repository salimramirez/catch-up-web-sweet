import { Laureate } from "../model/laureate.entity.js";

export class LaureateAssembler {
    static toEntityFromResource(resource) {
        return new Laureate({
            id: resource.id,
            firstname: resource.firstname,
            surname: resource.surname,
            born: resource.born,
            gender: resource.gender,
            prizes: resource.prizes
        });
    }

    static toEntitiesFromResponse(response) {
        console.log('Full response:', response.data); // 👈
        const laureatesResponse = response.data.laureates;
        if (!Array.isArray(laureatesResponse)) {
            console.error('Invalid format: expected an array under "laureates"');
            return [];
        }
        return laureatesResponse.map((laureate) => {
            return this.toEntityFromResource(laureate);
        })
    }
}
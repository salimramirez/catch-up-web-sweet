/**
 * Represents an Episode from the TV Maze API.
 * @author Salim Ramirez
 * @summary Entity model from TV episode.
 */
export class Episode {
    constructor({ id, name, season, number, summary, url, image }) {
        this.id = id;
        this.name = name;
        this.season = season;
        this.number = number;
        this.summary = summary;
        this.url = url;
        this.image = image?.medium || '';
    }
}
export class Headline {
    public id?: number;
    public title: string;
    public descriptions: string;

    constructor( ttl: string, dsc: string) {
        this.title = ttl;
        this.descriptions = dsc;
    }
}

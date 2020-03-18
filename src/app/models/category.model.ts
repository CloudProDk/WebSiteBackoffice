export class Category {
    public id?: number;
    public imagePath: string;
    public title: string;
    public descriptions: string;

    constructor(imgPth: string, ttl: string, dsc: string) {
        this.imagePath = imgPth;
        this.title = ttl;
        this.descriptions = dsc;
    }
}

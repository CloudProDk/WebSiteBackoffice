export class Category {
    public imagePath: string;
    public header: string;
    public description: string;

    constructor(imgPth: string, hdr: string, dsc: string) {
        this.imagePath = imgPth;
        this.header = hdr;
        this.description = dsc;
    }
}

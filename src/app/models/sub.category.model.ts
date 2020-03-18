export class SubCategory {
    public id?: number;
    public title: string;
    public descriptions: string;
    public fkCategoryId?: number;

    constructor(ttl: string, dsc: string, fKey: number) {
        this.title = ttl;
        this.descriptions = dsc;
        this.fkCategoryId = fKey;
    }
}

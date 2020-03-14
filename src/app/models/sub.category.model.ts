export class SubCategory {
    public id?: number;
    public title: string;
    public descriptions: string;
    public fkCategoryId?: string;

    constructor(ttl: string, dsc: string, fKey: string) {
        this.title = ttl;
        this.descriptions = dsc;
        this.fkCategoryId = fKey;
    }
}

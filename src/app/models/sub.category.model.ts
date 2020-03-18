export class SubCategory {
    public id?: number;
    public header: string;
    public description: string;
    public fk?: string;

    constructor(hdr: string, dsc: string, fKey: string) {
        this.header = hdr;
        this.description = dsc;
        this.fk = fKey;
    }
}

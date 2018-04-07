export class Photo {
    titre: string;
    footer: string;
    image: string;

    constructor(titre: string,
        footer: string,
        image: string) {
        this.titre = titre;
        this.footer = footer;
        this.image = image;
    }
}

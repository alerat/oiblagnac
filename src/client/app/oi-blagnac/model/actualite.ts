export class Actualite {
    titre: string;
    sousTitre: string;
    content: string;
    footer: string;
    image: string;
    video: string;

    constructor(titre: string,
        sousTitre: string,
        content: string,
        footer: string,
        image: string,
        video: string) {
        this.titre = titre;
        this.sousTitre = sousTitre;
        this.content = content;
        this.footer = footer;
        this.image = image;
        this.video = video;
    }
}

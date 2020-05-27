/**
 * Devoir
 * Class Representing Devoir (task) class
 */
export default class Devoir {
    id: number;
    titre: string;
    description: string;
    ytbUrl: string;
    constructor(id: number, titre: string, description: string, ytbUrl: string) {
        this.id = id;
        this.titre = titre;
        this.description = description;
        this.ytbUrl = ytbUrl;
    }


}

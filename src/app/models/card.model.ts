export class Card {
    id: number;
    status: boolean;
    name: string;
    color: string;

    constructor(id: number, status: boolean, name: string) {
        this.id = id;
        this.status = status;
        this.name = name;
        this.color = status ? 'green' : 'red';
    }
}
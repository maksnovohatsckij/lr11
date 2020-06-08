export class Card {
    status: boolean;
    name: string;
    color: string;

    constructor(status: boolean, name: string) {
        this.status = status;
        this.name = name;
        this.color = status ? 'green' : 'red';
    }
}
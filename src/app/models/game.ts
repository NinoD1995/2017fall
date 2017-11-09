export class Quote {
    text: string;
}

export class Player {
    name: string = "Anthony DiNardi"
    quotes: Quote[] = [];
    score: number = 0;
}

export class Room {
    players: Player[] = [new Player(), new Player()];
    dealer: Player;
    picture: string;
    quotes: Quote[] = [];
}
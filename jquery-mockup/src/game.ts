import * as $ from 'jquery';

export class Quote {
    text: string;
}

export class Player {
    name: string = "Anthony DiNardi";
    quotes: Quote[] = [];
    score: number = 0;

    drawQuotes() {
        $("#my-quotes").html(
            this.quotes.map(x=> `<li class="list-group-item">${x.text}</li>`).join("")
        );
    }
}

export class Room {
    players: Player[] = [new Player(), new Player()];
    dealer: Player;
    picture: string;
    quotes: Quote[] = [];

    drawPicture() {
        $("#picture").attr("src", this.picture);
    }

    drawQuotes() {
        $("#played-quotes").html(
            this.quotes.map(x=> `<li class="list-group-item">${x.text}</li>`).join("")
        );
    }

    drawPlayers() {
        $("#players").html(
            this.players.map(x=> `<li class="list-group-item">${x.name}</li>`).join("")
        );
    }
}

export class Game {
    players: Player[] = [];
    pictures: string[] = [
        "https://media4.s-nbcnews.com/j/newscms/2017_07/1903576/170215-chicken-farm-mn-1630_c65475166849611a3c0207983317eab4.nbcnews-ux-2880-1000.jpg",
        "do it.jpg"
    ];
    quotes: Quote[] = [
        { text: "test 1"},
        { text: "test 2"}
    ];
}

//Controller

const game = new Game();
const room = new Room();
const me = new Player();

var i = 0;
room.picture = game.pictures[i];
room.drawPicture();
room.drawQuotes();
room.drawPlayers();

me.quotes = game.quotes;
me.drawQuotes();

$("#cmd-flip").click(function(e) {
    e.preventDefault();
    i++;
    room.picture = game.pictures[i];
    room.drawPicture();
})
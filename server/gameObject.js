const quotes = require("./quotes");

let iCurrentPicture = 0;
let iCurrentQuote = 0;

const game = {
    pictures: [
        "/assets/img/do_it.jpg",
        "/assets/img/done_that_yourself.jpg",
        "/assets/img/welcome_surprise.jpg",
        "/assets/img/rank_of_master.jpg",
        "/assets/img/chosen_one.gif"
    ],
    getNextPicture: ()=> game.pictures[iCurrentPicture++],
    quotes: quotes,
    getNextQuote: ()=> game.quotes[(iCurrentQuote = (iCurrentQuote + 1) % game.quotes.length)],
    room: {
        picture: "",
        quotes: [],
        players: [],
        dealer: 0
    }
}

module.exports = game;
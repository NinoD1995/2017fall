const quotes = require("./quotes");

let iCurrentPicture = 0;
let iCurrentQuote = 0;

const game = {
    pictures: [
        "do_it.jpg",
        "done_that_yourself.jpg",
        "welcome_surprise.jpg",
        "rank_of_master.jpg",
        "chosen_one.gif"
    ],
    getNextPicture: ()=> game.pictures[iCurrentPicture++],
    quotes: quotes,
    getNextQuote: ()=> game.quotes[iCurrentQuote++],
    room: {
        picture: "",
        quotes: []
    }
}

module.exports = game;
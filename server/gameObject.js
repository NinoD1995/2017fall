let iCurrentPicture = 0;
let iCurrentQuote;

const game = {
    pictures: [
        "do_it.jpg",
        "done_that_yourself.jpg",
        "welcome_surprise.jpg",
        "rank_of_master.jpg",
        "chosen_one.gif"
    ],
    getNextPicture: ()=> game.pictures[iCurrentPicture++],
    quotes: [
        { text: "When you complain about homework due the next day but you've been putting it off for 2 weeks."},
        { text: "When you see a crunchy leaf on the ground."},
        { text: "When your friend punches you in the face."}
    ],
    room: {
        picture: "",
        quotes: []
    }
}

module.exports = game;
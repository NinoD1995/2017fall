"use strict";
exports.__esModule = true;
var $ = require("jquery");
var Quote = /** @class */ (function () {
    function Quote() {
    }
    return Quote;
}());
exports.Quote = Quote;
var Player = /** @class */ (function () {
    function Player() {
        this.quotes = [
            { text: "hopefully" },
            { text: "these show" }
        ];
        this.score = 0;
    }
    Player.prototype.drawQuotes = function () {
        $("#my-quotes").html(this.quotes.map(function (x) { return "<li class=\"list-group-item\">" + x.text + "</li>"; }).join(""));
    };
    return Player;
}());
exports.Player = Player;
var Room = /** @class */ (function () {
    function Room() {
        this.players = [new Player(), new Player()];
        this.quotes = [];
    }
    Room.prototype.drawPicture = function () {
        $("#picture").attr("src", this.picture);
    };
    Room.prototype.drawQuotes = function () {
        $("#played-quotes").html(this.quotes.map(function (x) { return "<li class=\"list-group-item\">" + x.text + "</li>"; }).join(""));
    };
    Room.prototype.drawPlayers = function () {
        $("#players").html(this.players.map(function (x) { return "<li class=\"list-group-item\">" + x.name + "</li>"; }).join(""));
    };
    return Room;
}());
exports.Room = Room;
var Game = /** @class */ (function () {
    function Game() {
        this.players = [];
        this.pictures = [
            "done_that_yourself.jpg",
            "do_it.jpg",
            "welcome_surprise.jpg"
        ];
        this.quotes = [
            { text: "test 1" },
            { text: "test 2" }
        ];
    }
    return Game;
}());
exports.Game = Game;
//Controller
var game = new Game();
var room = new Room();
var me = new Player();
var i = 0;
room.picture = game.pictures[i];
room.drawPicture();
room.drawQuotes();
room.drawPlayers();
me.quotes = game.quotes;
me.drawQuotes();
$("#cmd-flip").click(function (e) {
    e.preventDefault();
    i++;
    room.picture = game.pictures[i];
    room.drawPicture();
});

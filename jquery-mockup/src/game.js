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
        this.quotes = [];
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
            "https://media4.s-nbcnews.com/j/newscms/2017_07/1903576/170215-chicken-farm-mn-1630_c65475166849611a3c0207983317eab4.nbcnews-ux-2880-1000.jpg",
            "jquery-mockup/do it.jpg"
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

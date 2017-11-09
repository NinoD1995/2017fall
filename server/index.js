const express = require("express");
const handler = require("./httpHandler");
const gameController = require("./gameController");
const bodyParcer = require("body-parser");

const server = express();

server.use(bodyParcer.urlencoded());
server.use(bodyParcer.json());


server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
server.use("/client", express.static("./jquery-mockup"))
server.use("/old", handler.main);
server.use("/game", gameController.router);


server.listen(3000);

console.log("http://localhost:3000");
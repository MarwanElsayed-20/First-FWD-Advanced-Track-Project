"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import express framework to create a server
var express_1 = __importDefault(require("express"));
// import routes endpoint
var routes_1 = __importDefault(require("./routes"));
// create our express app
var app = (0, express_1.default)();
// configure the port for the server to use
var port = process.env.PORT || 3000;
app.use(routes_1.default);
// start the server
app.listen(port, function () {
    console.log("server is running at LocalHost: ".concat(port));
});
// export it to use it else where
exports.default = app;

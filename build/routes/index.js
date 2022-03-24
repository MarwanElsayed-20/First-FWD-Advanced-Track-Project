"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import express
var express_1 = __importDefault(require("express"));
// import images endpoint
var images_1 = __importDefault(require("./api/images"));
var routes = express_1.default.Router();
routes.get('/', function (req, res) {
    res.send('Welcome To Api Process Images');
});
routes.use('/images', images_1.default);
// export it to use it else where
exports.default = routes;

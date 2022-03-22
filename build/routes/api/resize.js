"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var resize = express_1.default.Router();
resize.use(express_1.default.static("build"));
resize.get("/", function (req, res) {
    var fileName = req.query.filename;
    var img = "<img src='./../../../build/imgs/encenadaport.jpg'/>";
    res.send(img);
});
// resize.get("/resize/:fileName/:width/:height", (req, res) => {
//   const fileName = req.params;
//   const width = req.params;
//   const height = req.params;
//   const img = `./../../../build/imgs/${fileName}.jpg`;
//   const inputFile = img;
//   const outputFile = "./../../../build/imgs/resized-img";
//   const resizeImage = async () => {
//     try {
//       await sharp(inputFile)
//         .resize({ width: 100, height: 200 })
//         .toFile(outputFile);
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   res.send(resizeImage());
// });
exports.default = resize;

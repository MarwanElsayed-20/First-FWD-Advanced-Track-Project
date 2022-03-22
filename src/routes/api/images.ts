// import express
import express from "express";
// import sharp library for processing images
import sharp from "sharp";
// import path module
import path from "path";
// import fileSystem module
import { promises as fsPromises } from "fs";
import fs from "fs";
// import images data to use
import imagesData from "../../utilities/ImagesData";

// create images routes
const images = express.Router();

// create images endPoint
images.get("/", async (req: express.Request, res: express.Response) => {
  // get data from query params
  const imgName = req.query.imagename as string;
  const width: number = parseInt(req.query.width as string);
  const height: number = parseInt(req.query.height as string);
  // get img absolute path
  const img = path.resolve("./") + `/build/imgs/${imgName}.jpg`;
  const resizedImg = `build/resized-img/${imgName}x${width}x${height}.jpg`;
  // put image name in  includes to check if it there or not
  const imagesName = imagesData.includes(imgName);

  // check if the user entered a imgName or not
  if (imgName === undefined) {
    return res
      .status(400)
      .send("You Need To Enter The imgName In A Query Parameter");
  }

  // check if the user entered a width and height
  if (width === 0 || height === 0) {
    return res.status(400).send("Invalid, The Width Or The Height cant be 0");
  }

  // check if the user entered a valid imgName or not
  if (imagesName === false) {
    return res.status(404).send("This Image Doesn't Exist Enter A Valid One");
  }

  if (!fs.existsSync("build/resized-img")) {
    // create a folder if it doesn't exist
    await fsPromises.mkdir("build/resized-img");
  }

  if (!fs.existsSync(resizedImg)) {
    // using sharp library to resize image
    await sharp(img)
      .resize({ width: width, height: height })
      .toFile(resizedImg);
  }

  // send the image to the user
  res.sendFile(
    path.resolve("./") + `/build/resized-img/${imgName}x${width}x${height}.jpg`
  );
});

// export it to use it else where
export default images;

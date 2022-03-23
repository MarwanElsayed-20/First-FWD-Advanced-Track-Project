import sharp from "sharp";
import fs from "fs";
import { promises as fsPromises } from "fs";

const resizeImgs = async (
  img: string,
  width: number,
  height: number,
  resizedImg: string
) => {
  if (!fs.existsSync("build/resized-img")) {
    // create a folder if it doesn't exist
    await fsPromises.mkdir(__dirname + "build/resized-img");
  }

  try {
    await sharp(img)
      .resize({ width: width, height: height })
      .toFile(resizedImg);
  } catch (error) {
    console.log("error while processing image", error);
  }
};

export default resizeImgs;

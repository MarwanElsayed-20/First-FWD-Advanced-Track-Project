// import sharp library to process images
import sharp from 'sharp'
// import file system module
import fs from 'fs'
import { promises as fsPromises } from 'fs'

// async function to resize images using sharp
const resizeImgs = async (
  img: string,
  width: number,
  height: number,
  resizedImg: string
) => {
  if (!fs.existsSync('build/resized-img')) {
    // create a folder if it doesn't exist
    await fsPromises.mkdir(__dirname + 'build/resized-img')
  }

  // using sharp to resize image and create it
  try {
    await sharp(img).resize({ width: width, height: height }).toFile(resizedImg)
  } catch (error) {
    console.log('error while processing image', error)
  }
}

// export resize function
export default resizeImgs

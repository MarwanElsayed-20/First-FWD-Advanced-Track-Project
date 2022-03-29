// import express
import express from 'express'
// import path module
import path from 'path'
// import fileSystem module
import fs from 'fs'
// import images data to use
import imagesData from '../../utilities/ImagesData'
import resizeImgs from './resize'
// create images routes
const images = express.Router()

// create images endPoint
images.get('/', async (req: express.Request, res: express.Response) => {
  // get data from query params
  const imgName = req.query.imagename as string
  const width: number = parseInt(req.query.width as string)
  const height: number = parseInt(req.query.height as string)
  // get img absolute path
  const img = path.resolve('./') + `/build/imgs/${imgName}.jpg`
  const resizedImg =
    path.resolve('./') + `/resized-img/${imgName}x${width}x${height}.jpg`
  // put image name in  includes to check if it there or not
  const imagesName = imagesData.includes(imgName)

  // check if the user entered a imgName or not
  if (imgName === undefined) {
    return res
      .status(400)
      .send('You Need To Enter The imgName In A Query Parameter')
  }

  // check if the user entered a width and height
  if (width === 0 || height === 0) {
    return res.status(400).send('Invalid, The Width Or The Height cant be 0')
  }

  // check if the user entered a valid imgName or not
  if (imagesName === false) {
    return res.status(404).send('This Image Does not Exist Enter A Valid One')
  }

  // check if the processing image is not exist so we resize it if exist just send it
  if (!fs.existsSync(resizedImg)) {
    // using the process image function
    await resizeImgs(img, width, height, resizedImg)
  }

  // send the image to the user
  return res.sendFile(
    path.resolve('./') + `/resized-img/${imgName}x${width}x${height}.jpg`
  )
})

// export it to use it else where
export default images

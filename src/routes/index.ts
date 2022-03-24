// import express
import express from 'express'
// import images endpoint
import images from './api/images'

const routes = express.Router()

routes.get('/', (req: express.Request, res: express.Response): void => {
  res.send('Welcome To Api Process Images')
})

routes.use('/images', images)

// export it to use it else where
export default routes

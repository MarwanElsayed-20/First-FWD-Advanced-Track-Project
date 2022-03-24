// import express framework to create a server
import express from 'express'
// import routes endpoint
import routes from './routes'

// create our express app
const app = express()
// configure the port for the server to use
const port = process.env.PORT || 3000

app.use(routes)

// start the server
app.listen(port, () => {
  console.log(`server is running at LocalHost: ${port}`)
})

// export it to use it else where
export default app

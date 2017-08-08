import * as express from 'express'

const app = express()
const port = process.env.PORT || 1337

app.use('/', (req : express.Request, res : express.Response) => {
  return res.json({data: 'hello world'})
})

app.listen(port, () => {
  console.log(`Listening on ${port}`)
})

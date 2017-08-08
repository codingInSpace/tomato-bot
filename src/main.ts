import * as express from 'express'
import routes from './routes'

class App {
  public app: express.Application
  private port: number

  constructor() {
    this.app = express()
    this.port = process.env.PORT || 1337
    this.configureApi()
  }

  public run(): void {
    this.app.listen(this.port, () => {
      console.log(`Listening on ${this.port}`)
    })
  }

  private configureApi(): void {
    this.app.use(routes)
  }
}

const app = new App()
app.run()

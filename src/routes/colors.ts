import * as express from 'express'
import * as colorCtrl from '../controllers/colors'

const router: express.Router = express.Router()

router.route('/')
  .get(colorCtrl.determineColor)

export default router

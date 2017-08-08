import * as express from 'express'
import colors from './colors'

const router: express.Router = express.Router()

router.use('/colors', colors)

export default router

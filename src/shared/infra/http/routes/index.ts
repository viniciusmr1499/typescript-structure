import { Router } from 'express'
import test from '@modules/users/infra/http/routes/test.routes'

const routes = Router()

routes.use('/test', test)

export default routes

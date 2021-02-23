import { Router } from 'express'

import TestController from '../controllers/TestController'

const testRouter = Router()
const testController = new TestController()

testRouter.get('/', testController.show)

export default testRouter

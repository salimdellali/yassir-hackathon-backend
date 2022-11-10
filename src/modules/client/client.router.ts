import { Router } from 'express'
import ClientController from './client.controller'

const router = Router()

router.route('/requests').get(ClientController.getClientRequests)

export default router

import { Router } from 'express'
import ClientController from './client.controller'

const router = Router()

router.route('/:clientid/profile').get(ClientController.getClientDetails)
router.route('/:clientid/requests').get(ClientController.getClientRequests)

export default router

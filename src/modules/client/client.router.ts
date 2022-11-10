import { Router } from 'express'
import ClientController from './client.controller'

const router = Router()

router.route('/:clientid/profile').get(ClientController.getClientProfile)
router
    .route('/:clientid/requests/all')
    .get(ClientController.getClientAllRequests)
router
    .route('/:clientid/request/:requestid/offers/accepted')
    .get(ClientController.getClientRequestAcceptedOffer)

// for the dashboard
router.route('/all').get(ClientController.getAllClientsProfiles)

export default router

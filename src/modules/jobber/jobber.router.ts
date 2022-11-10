import { Router } from 'express'
import JobberController from './jobber.controller'

const router = Router()

router.route('/:jobberid/profile').get(JobberController.getJobberDetails)

export default router

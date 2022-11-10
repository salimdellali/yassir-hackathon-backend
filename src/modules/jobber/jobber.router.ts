import { Router } from 'express'
import JobberController from './jobber.controller'

const router = Router()

router.route('/:jobberid/profile').get(JobberController.getJobberProfile)
router
    .route('/:jobberid/jobs/available')
    .get(JobberController.getJobberAvailableJobs)
router
    .route('/:jobberid/jobs/accepted')
    .get(JobberController.getJobberAcceptedJobs)

// for the dashboard
router.route('/all').get(JobberController.getAllJobbersProfiles)

export default router

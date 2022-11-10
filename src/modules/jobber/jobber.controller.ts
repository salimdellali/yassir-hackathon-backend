import { Request, Response } from 'express'
import JobberService from './jobber.service'

export default class JobberController {
    static getJobberProfile = async (req: Request, res: Response) => {
        const { jobberid } = req.params
        const result = await JobberService.getJobberProfile(jobberid)
        return res.status(200).json(result)
    }

    static getJobberAvailableJobs = async (req: Request, res: Response) => {
        const { jobberid } = req.params
        const result = await JobberService.getJobberAvailableJobs(jobberid)
        return res.status(200).json(result)
    }

    static getJobberAcceptedJobs = async (req: Request, res: Response) => {
        const { jobberid } = req.params
        const result = await JobberService.getJobberAcceptedJobs(jobberid)
        return res.status(200).json(result)
    }

    // for the dashboard
    static getAllJobbersProfiles = async (req: Request, res: Response) => {
        const result = await JobberService.getAllJobbersProfiles()
        return res.status(200).json(result)
    }
}

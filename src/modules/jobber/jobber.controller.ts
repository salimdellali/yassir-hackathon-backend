import { Request, Response } from 'express'
import JobberService from './jobber.service'

export default class JobberController {
    static getJobberDetails = async (req: Request, res: Response) => {
        const { jobberid } = req.params
        const result = await JobberService.getJobberDetails(jobberid)
        return res.status(200).json(result)
    }
}

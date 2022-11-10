import { Request, Response } from 'express'
import ClientService from './client.service'

export default class ClientController {
    static getClientDetails = async (req: Request, res: Response) => {
        const { clientid } = req.params
        const result = await ClientService.getClientDetails(clientid)
        return res.status(200).json(result)
    }

    static getClientRequests = async (req: Request, res: Response) => {
        const { clientid } = req.params
        const result = await ClientService.getClientRequests(clientid)
        return res.status(200).json(result)
    }
}

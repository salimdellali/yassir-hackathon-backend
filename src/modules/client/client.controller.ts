import { Request, Response } from 'express'
import ClientService from './client.service'

export default class ClientController {
    static getClientRequests = async (req: Request, res: Response) => {
        const result = await ClientService.getClientRequests()
        return res.status(200).json(result)
    }
}

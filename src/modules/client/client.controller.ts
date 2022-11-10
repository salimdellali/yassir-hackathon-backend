import { Request, Response } from 'express'
import ClientService from './client.service'

export default class ClientController {
    static getClientProfile = async (req: Request, res: Response) => {
        const { clientid } = req.params
        const result = await ClientService.getClientProfile(clientid)
        return res.status(200).json(result)
    }

    static getClientAllRequests = async (req: Request, res: Response) => {
        const { clientid } = req.params
        const result = await ClientService.getClientAllRequests(clientid)
        return res.status(200).json(result)
    }

    static getClientRequestAcceptedOffer = async (
        req: Request,
        res: Response,
    ) => {
        const { clientid, requestid } = req.params
        const result = await ClientService.getClientRequestAcceptedOffer({
            clientid,
            requestid,
        })
        return res.status(200).json(result)
    }

    //for the dashboard
    static getAllClientsProfiles = async (req: Request, res: Response) => {
        const result = await ClientService.getAllClientsProfiles()
        return res.status(200).json(result)
    }
}

import { Request, Response } from 'express';
import database from '../database/connection';
export default class ConnectionController {
    async create(request: Request, response: Response){
        const { user_id } = request.body;
        const connectionId = await database('connections').insert({user_id})
        return response.status(201).json({message: "Success", connectionId})
    }
    async index(request: Request, response: Response){
        const totalConnectionsCount = await database('connections').count("* as total");
        const { totalResult } = totalConnectionsCount[0];
        return response.json({ totalResult });
    }
}
import { Request, Response } from "express";
import connection from "../database/connection";

import bcrypt from 'bcrypt';
import authSecret from '../config/Auth/authSecretConfig';
import generateToken from "../utils/generateToken";
import * as Yup from 'yup';

export default class SessionController {
    async login(request: Request, response: Response) {
        const { email, password } = request.body;
        const schema = Yup.object().shape({
            email: Yup.string().required().email(),
            password: Yup.string().required()
        });
        if (!(await schema.isValid({email, password}))){
            return response.status(400).json({error: "An error ocurred!"})
        }
        const user = await connection('users').select('id', 'email', 'password').where({email}).first();
        if(!user) return response.json({error: 'User not exists'});
        const isEqual = await bcrypt.compare(user.password, password);
        if(!isEqual) return response.json({error: 'Passwords does not match'});
        const token = await generateToken({id: user.id}, String(authSecret.secret));
        return response.json({
            user: {
                id: user.id,
                email: user.email,
            },
            token,
            type: 'Bearer'
        })
    }
}
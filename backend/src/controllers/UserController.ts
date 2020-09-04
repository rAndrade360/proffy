import { Request, Response } from "express";
import bcrypt from 'bcrypt';
import * as Yup from 'yup';
import connection from "../database/connection";

export default class UserController {
    async create(request: Request, response: Response) {
        const { firstname, lastname, email, password } = request.body;
        const schema = Yup.object().shape({
            firstname: Yup.string().required().trim(),
            lastname: Yup.string().required().trim(),
            email: Yup.string().email().required().trim(),
            password: Yup.string().required().min(8).trim()
        });
        const validateSchema = await schema.isValid({firstname, lastname, email, password});
        if(!validateSchema) return response.status(400).json({error: "Invalid argument"});
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = await connection('users').insert({
            firstname,
            lastname,
            email,
            password: hashedPassword
        });
        return response.json(user);
    }
}
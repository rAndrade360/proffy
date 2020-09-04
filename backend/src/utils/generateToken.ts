import jwt from 'jsonwebtoken';
export default async function generateToken(payload: object, secret: string) {
    return jwt.sign(payload, secret);
}
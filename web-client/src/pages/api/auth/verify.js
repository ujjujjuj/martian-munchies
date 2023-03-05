import { User } from "@/db/db";
import * as jwt from "jsonwebtoken";

export default function handler(req, res) {
    if (req.method !== 'POST') {
        res.status(405).send({ message: 'Only POST requests allowed' })
        return
    }
    const body = req.body;
    if (!body.token) {
        res.status(400).send({ message: 'Missing required fields' })
        return
    }
    const verifyToken = async () => {
        try {
            const { email } = jwt.verify(
                req.body.token,
                process.env.ACCESS_TOKEN_SECRET
            );
            let user = await User.findByPk(email);
            return res.json({
                user: {
                    ...user.dataValues, password: undefined
                }
            });
        } catch (err) {
            return res.json({ error: err });
        }
    }
    verifyToken();
}

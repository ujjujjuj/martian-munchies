import { User } from "@/db/db";
import * as jwt from "jsonwebtoken";

export default function handler(req, res) {
    if (req.method !== 'POST') {
        res.status(405).send({ message: 'Only POST requests allowed' })
        return
    }
    const body = req.body;
    if (!body.email || !body.username || !body.password || !body.wallet) {
        res.status(400).send({ message: 'Missing required fields' })
        return
    }
    const signUp = async () => {
        let user = await User.findByPk(body.email);
        if (user !== null) {
            res.status(401).json({ error: "User already exists" });
            res.end();
            return
        }
        const authToken = jwt.sign(
            { email: body.email },
            process.env.ACCESS_TOKEN_SECRET,
            {
                expiresIn: "30d",
            }
        );
        await
            User.create({
                email: body.email,
                username: body.username,
                password: body.password,
                authToken: authToken,
                wallet: body.wallet
            });

        res.status(200).json({
            authToken, user: {
                ...body, password: undefined
            }
        })
        res.end();
    }
    signUp();
}

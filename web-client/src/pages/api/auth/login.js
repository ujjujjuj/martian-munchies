import { User } from "@/db/db";
import * as jwt from "jsonwebtoken";
import crypto from "crypto";

export default function handler(req, res) {
    if (req.method !== 'POST') {
        res.status(405).send({ message: 'Only POST requests allowed' })
        return
    }
    const body = req.body;
    if (!body.wallet && (!body.email || !body.password)) {
        res.status(400).send({ message: 'Missing required fields' })
        return
    }
    const login = async () => {
        let user;
        if (body.wallet) {
            user = await User.findOne({
                where: {
                    wallet: body.wallet
                }
            });
            if (!user) {
                res.status(401).json({ error: "User does not exist" });
                res.end();
                return
            }
            const authToken = jwt.sign(
                { email: user.email },
                process.env.ACCESS_TOKEN_SECRET,
                {
                    expiresIn: "30d",
                }
            );

            await
                User.update({
                    authToken: authToken
                }, {
                    where: {
                        email: user.email
                    }
                });

            res.status(200).json({
                authToken, user: {
                    ...body, password: undefined
                }
            })
            res.end();
            return;
        }
        else { user = await User.findByPk(body.email); }
        if (!user) {
            res.status(401).json({ error: "User does not exist" });
            res.end();
            return
        }
        const hashedPassword = crypto
            .createHash("sha256")
            .update(body.password)
            .digest("hex");

        if (user.password !== hashedPassword) {
            res.status(401).json({ error: "Incorrect password" });
            res.end();
            return
        }

        const authToken = jwt.sign(
            { email: user.email },
            process.env.ACCESS_TOKEN_SECRET,
            {
                expiresIn: "30d",
            }
        );

        await
            User.update({
                authToken: authToken
            }, {
                where: {
                    email: user.email
                }
            });

        res.status(200).json({
            authToken, user: {
                ...body, password: undefined
            }
        })
        res.end();
    }
    login();
}

import { User } from "@/db/db";
import * as jwt from "jsonwebtoken";

export default function handler(req, res) {
    if (req.method !== 'POST') {
        res.status(405).send({ message: 'Only POST requests allowed' })
        return
    }
}
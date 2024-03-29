import { Request, Response } from "express";
import { answer } from "./chat";

export const generateQuestion = async (req: Request, res: Response) => {
    try {
        const question: string = req.body.question;
        const result = await answer(question);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).send(`INTERNAL SERVER ERROR: ${error}`);
    }
}
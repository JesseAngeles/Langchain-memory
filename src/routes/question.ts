import { Router } from "express";
import { generateQuestion } from "../controllers/question";


const routerAnswer = Router();

routerAnswer.post('/ask', generateQuestion);

export default routerAnswer;
import { log } from 'console';
import express, { Router } from 'express';
import routerQuestion from './src/routes/question';

const app = express();
app.use(express.json());
app.use('/question', routerQuestion);

app.listen(8085, () => console.log('Server activo'));
/**
 * Root Router
 * Redirections to Routers
 */

import express, {Request, Response} from 'express';
import helloRouter from './HelloRouter';
import { LogInfo } from '../utils/logger';

//server instance
let server = express();

//Router instance
let rootRouter = express.Router();

// Activate for request to http://localhost:3001/api

rootRouter.get('/',(req: Request, res: Response) =>{
    LogInfo('GET: http://localhost:3001/api')
    // send Hello World
    res.send('Hello World, Welcome to APP Express + TS + Nodemon + Jest + Swagger + Mongoose');
});

//Redirections to Routers & Controllers

server.use('/',rootRouter);
server.use('/hello', helloRouter);

//Add more routes

export default server
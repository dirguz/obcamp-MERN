import express, { Express, Request, Response } from "express";
import cors from 'cors';
import helmet from 'helmet';

//TODO: HTTPS

import routes from '../routes';


//create Express server
const server: Express = express();

//Define SERVER to use /api and use rooRouter from index.ts in routes
server.use('/api',routes)

//TODO: Mongoose Connection

//Segurity config
server.use(helmet());
server.use(cors());

//Content type
server.use(express.urlencoded({extended:true, limit:'50mb'}));
server.use(express.json({limit:'50mb'}));

// Redirections
server.get('/', (req:Request,res:Response) => {
    res.redirect('/api');
});

export default server;
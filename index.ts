//replicamos lo mismo que index.js(suprimir.js) pero en TS
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import server from "./sra/server";
import { LogError, LogSuccess } from "./sra/utils/logger";

//configuration the .env file
dotenv.config();

//create Express APP
const app: Express = express();
const port: string | number = process.env.PORT || 3001;

// Define the firts Route of APP

// app.get('/',(req: Request, res: Response) =>{
//     // send Hello World
//     res.send('Hello World, Welcome to APP Express + TS + Nodemon + Jest + Swagger + Mongoose');
// });

// app.get('/primera',(req: Request, res: Response) =>{
//     // send Hello World
//     res.json({message:"Goodbye, world"});
// });

// app.get('/segunda',(req: Request, res: Response) =>{
//     const {name}=req.query;
//     console.log(name);
//     if(name){
//         res.json({message:`Hola ${name}`});
//     }else{
//        res.json({message:"Hola anonimo"});}
// });


// Execute server and Listen Request to PORT
server.listen(port, () => {
    LogSuccess(`Server is running on http://localhost:${port}/api`)
});

//control server error
server.on('error', (error) => {
    LogError(`[SERVER ERROR]: ${error}`);
});
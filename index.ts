//replicamos lo mismo que index.js(suprimir.js) pero en TS
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

//configuration the .env file
dotenv.config();

//create Express APP
const app: Express = express();
const port: string | number = process.env.PORT || 3001;

// Define the firts Route of APP

app.get('/',(req: Request, res: Response) =>{
    // send Hello World
    res.send('Hello World, Welcome to APP Express + TS + Nodemon + Jest + Swagger + Mongoose');
});

app.get('/nuevo',(req: Request, res: Response) =>{
    // send Hello World
    res.send('GET: Nueva Ruta');
});

// Execute APP and Listen Request to PORT
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
});
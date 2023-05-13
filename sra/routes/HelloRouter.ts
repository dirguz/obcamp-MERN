import express,{ Request, Response } from "express";
import { HelloControler } from "../controller/HelloController";
import { LogInfo } from "../utils/logger";

//Router from express
let helloRouter = express.Router();

//GET -> http://localhost:3001/api/hello/
helloRouter.route("/")
.get(async(req:Request, res:Response)=>{
    //obtain Query Param
    let name:any = req?.query?.name;
    LogInfo(`Query Param: ${name}`);
    //Controler Instance to execute method
    const controller: HelloControler = new HelloControler();
    //obtain Response
    const response = await controller.getMessage(name);
    //Send response 
    return res.send(response);
})

//export Hellou Router

export default helloRouter;

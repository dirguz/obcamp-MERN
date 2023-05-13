import express,{ Request, Response } from "express";
import { GoodBayController } from "../controller/GoodBayController";
import { LogInfo } from "../utils/logger";

let goodBayRouter = express.Router();

goodBayRouter.route('/')
.get(async(req:Request, res:Response)=>{
    let name:any = req?.query?.name;
    LogInfo(`Query Param: ${name}`);
    const controller: GoodBayController = new GoodBayController();
    const response = await controller.getMessage(name,new Date());
    return res.send(response);
})

export default goodBayRouter;
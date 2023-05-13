import { BasicResponse } from "./types";
import { IHelloControler } from "./interfaces";
import { LogSuccess } from "../utils/logger";


export class HelloControler implements IHelloControler{

    public async getMessage(name?: string | undefined): Promise<BasicResponse> {
        LogSuccess('[/api/hello] Get Request');
return  {
         message:`Hello ${name || "World!"}`
        }   
    }
    
}
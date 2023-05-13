import { BasicResponse, DateResponse } from "./types";
import { IGoodByeControler } from "./interfaces";
import { LogSuccess } from "../utils/logger";

export class GoodBayController implements IGoodByeControler{

    public async getMessage(name: string, date:any): Promise<DateResponse> {
        LogSuccess('[/api/goodbay] Get Request');
    return  {
            message:`Goodbye ${name || "World!"}`,
            date
           } 
    }
} 
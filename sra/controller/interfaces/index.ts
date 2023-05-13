import { BasicResponse, DateResponse } from "../types";

export interface IHelloControler{
    getMessage(name?:string): Promise<BasicResponse>
}

export interface IGoodByeControler{
    getMessage(name?:string, date?:any): Promise<DateResponse>
}


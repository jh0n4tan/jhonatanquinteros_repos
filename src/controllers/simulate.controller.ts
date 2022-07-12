import { Request, Response } from "express";
import simulate from "../models/simulate";


export const simulate_controller = async(req:Request,res:Response)=>{
        const response = await simulate.getsimulate();
        res.status(200);
        res.send(response);
};

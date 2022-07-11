import { Request, Response } from "express";
import axios from 'axios';


export const simulate_controller = async(req:Request,res:Response)=>{
        const result = await axios.get('http://localhost:3000/mockserver');
        /* const respositories = result.data[0].respositories.map((repos:any)=>{
            return {...repos,state:mockRequestValues[repos.state]}
        }); */

        res.status(200);
        res.send({...result.data[0]});
};

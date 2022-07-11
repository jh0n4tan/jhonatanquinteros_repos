import { Request, Response } from "express";
import { AppDataSource } from '../db/cockroach.connection';
import { Organization } from "../models/entities/organization.model";

const get_organizations = async(req:Request,res:Response)=>{
    const users = await AppDataSource.getRepository(Organization).find()
    res.json(users);
};



export default {
    get_organizations
}
import { Request, Response } from "express";
import { AppDataSource } from '../db/cockroach.connection';
import { Organization } from "../models/entities/organization.model";

const get_organizations = async(req:Request,res:Response)=>{
    const users = await AppDataSource.getRepository(Organization).find()
    res.json(users);
};

const create_organization = async(req:Request,res:Response)=>{    
    const organization = await AppDataSource.getRepository(Organization).create(req.body)
    const results = await AppDataSource.getRepository(Organization).save(organization)
    return res.status(200).send(results);
};


export default {
    get_organizations,
    create_organization
}
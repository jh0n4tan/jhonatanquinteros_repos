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


const edit_organization = async(req:Request,res:Response)=>{
    const id = req.params.id;

    const organization = await AppDataSource.getRepository(Organization).findOneBy({
        id_organization: parseInt(id)
    });

    if(!organization) return res.status(400).send('there is no organization to update')        
        
    const results = await AppDataSource.getRepository(Organization).update(id,req.body);

    return res.send(results)
};

const delete_organization = async(req:Request,res:Response)=>{
    const id = req.params.id;
    const results = await AppDataSource.getRepository(Organization).delete(id);
    return res.send(results);
};


export default {
    get_organizations,
    create_organization,
    edit_organization,
    delete_organization
}
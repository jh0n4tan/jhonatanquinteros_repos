import { Request, Response } from "express";
import { Parser } from 'json2csv';
import axios from 'axios';

const get_organizations = async(req:Request,res:Response)=>{ 
    const id_tribe= req.params.id;
    const url = `http://localhost:4000/api/tribes/${id_tribe}`;

    const response = await axios.get(url);

    const jsonToCsv = new Parser();
    const csvGenerated = jsonToCsv.parse(response.data.repositories[0]);    
    
    res.attachment('RepositoryMetrics.csv')
    res.set('Content-Type', 'text/csv');
    res.status(200); 
    res.send(csvGenerated);  

};
export default get_organizations;

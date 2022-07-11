import express from "express";
import config from '../config';
import parser from 'body-parser';
import cors from 'cors';
import { simulateroutes,organizationroutes } from "../routes";
import { AppDataSource } from "../db/cockroach.connection";

export default class Server{   
    private app;
    private port = config.PORT || '4000';
    private paths = {
        simulate:'/api/simulateserver',
        organization:'/api/organization'
    };

    constructor(){
        this.app = express();
        this.middlewares();
        this.routes();
        this.db();
    }

    private async db(){        
        await AppDataSource.initialize();
    }

    private middlewares(){
        this.app.use(cors({origin: true, credentials: true}));
        this.app.use(parser.urlencoded({extended:false}));
        this.app.use(parser.json());
    }

    private routes(){          
        this.app.use(this.paths.simulate, simulateroutes);
        this.app.use(this.paths.organization, organizationroutes);
    }

    public listening(){
        this.app.listen(this.port,()=>{
            console.log(`Server running on port ${this.port}`);
        })
    }
}
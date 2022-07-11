import express from "express";
import config from '../config';
import parser from 'body-parser';
import cors from 'cors';
import { simulateroutes } from "../routes";


export default class Server{   
    private app;
    private port = config.PORT || '4000';
    private paths = {
        simulate:'/api/simulateserver'
    };

    constructor(){
        this.app = express();
        this.middlewares();
        this.routes();
        this.db();
    }

    private  db(){        
    }

    private middlewares(){
        this.app.use(cors({origin: true, credentials: true}));
        this.app.use(parser.urlencoded({extended:false}));
        this.app.use(parser.json());
    }

    private routes(){          
        this.app.use(this.paths.simulate, simulateroutes);
    }

    public listening(){
        this.app.listen(this.port,()=>{
            console.log(`Server running on port ${this.port}`);
        })
    }
}
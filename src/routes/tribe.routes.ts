import { Router } from 'express'
const router = Router();
import { tribe_controller }from '../controllers/index'
import { AppDataSource } from '../db/cockroach.connection';
import { Tribe } from "../models/entities/tribe.model";
import { Metrics } from "../models/entities/metricts.model";
import mockRequestValues from '../utils/mockRequestValues';
import axios from 'axios';

    const tribeshandler = tribe_controller({axios,AppDataSource,Tribe,Metrics,mockRequestValues});
     
    router.get('/:id', tribeshandler.get); 
    
export default router;
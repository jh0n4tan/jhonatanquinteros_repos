import { Router } from 'express'
const router = Router();
import { simulate_controller } from '../controllers/index'
     
    router.get('/', simulate_controller);        

export default router;
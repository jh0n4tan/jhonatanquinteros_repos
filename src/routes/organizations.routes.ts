import { Router } from 'express'
import { organizations_controller } from '../controllers/index'
const router = Router();
     
    router.get('/getall', organizations_controller.get_organizations);       
       

export default router;
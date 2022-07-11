import { Router } from 'express'
import { organizations_controller } from '../controllers/index'
const router = Router();
     
    router.get('/getall', organizations_controller.get_organizations);      
    router.post('/save', organizations_controller.create_organization);
       

export default router;
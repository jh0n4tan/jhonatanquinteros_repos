import { Router } from 'express'
const router = Router();
import { tribe_controller } from '../controllers/index'
     
    router.get('/:id', tribe_controller.tribe_controller); 
    
export default router;
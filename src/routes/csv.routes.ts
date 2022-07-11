import { Router } from 'express'
import { csv_controller } from '../controllers/index'
const router = Router();

    router.get('/:id', csv_controller);          

export default router;
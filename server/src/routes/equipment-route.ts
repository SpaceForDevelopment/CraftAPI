import express from 'express';
import {
    findAllEquipmentController,
    findEquipmentByIdController,
    createEquipmentController,
    updateEquipmentController,
    deleteEquipmentController,
} from '../controllers/equipment-controller.js';
import { verifyTokenInBack } from '../middlewares/token-middleware';

const equipmentRouter = express.Router();

equipmentRouter.get('/', findAllEquipmentController);

equipmentRouter.get('/search', findEquipmentByIdController);

equipmentRouter.post('/', verifyTokenInBack, createEquipmentController);

equipmentRouter.put('/:id', verifyTokenInBack, updateEquipmentController);

equipmentRouter.delete('/:id', verifyTokenInBack, deleteEquipmentController);

export { equipmentRouter };

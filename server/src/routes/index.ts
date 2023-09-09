import express from 'express';
import { getIndex } from '../controllers/index-controller.js';
import { getMobs } from '../controllers/mobs-controller.js';
import { getEquipment } from '../controllers/equipment-controller.js';
import { getOres } from '../controllers/ores-controller.js';

const router = express.Router();

router.get('/', getIndex);

router.get('/mobs', getMobs);

router.get('/equipment', getEquipment);

router.get('/ores', getOres);

export default router;
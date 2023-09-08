import express from 'express';
import { getIndex } from '../controllers/index-controller.js';
import { getMobs } from '../controllers/mobs-controller.js';

const router = express.Router();

router.get('/', getIndex);

router.get('/mobs', getMobs);

export default router;
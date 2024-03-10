import express from 'express';
import { findAllMobsController, findMobByIdController, createMobController, updateMobController, deleteMobController } from '../controllers/mob-controller.js';
import { verifyTokenInBack } from '../middlewares/token-middleware';

const mobRouter = express.Router();

mobRouter.get('/', findAllMobsController);

mobRouter.get('/search', findMobByIdController);

mobRouter.post('/', verifyTokenInBack, createMobController);

mobRouter.put('/:id', verifyTokenInBack, updateMobController);

mobRouter.delete('/:id', verifyTokenInBack, deleteMobController);

export { mobRouter };
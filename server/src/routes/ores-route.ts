import express from 'express';
import { findAllOresController, findOreByIdController, createOreController, updateOreController, deleteOreController } from '../controllers/ore-controller.js';
import { verifyTokenInBack } from '../middlewares/token-middleware';

const oreRouter = express.Router();

oreRouter.get('/', findAllOresController);

oreRouter.get('/search', findOreByIdController);

oreRouter.post('/', verifyTokenInBack, createOreController);

oreRouter.put('/:id', verifyTokenInBack, updateOreController);

oreRouter.delete('/:id', verifyTokenInBack, deleteOreController);

export default oreRouter;
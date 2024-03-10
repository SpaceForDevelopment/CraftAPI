import express from 'express';
import { indexController } from '../controllers/index-controller.js';
import swaggerUI from 'swagger-ui-express';
import swaggerDocs from '../swagger.json';

const indexRouter = express.Router();

indexRouter.get('/', indexController);

indexRouter.use('/documentation', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

export { indexRouter };
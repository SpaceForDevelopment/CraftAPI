import express from 'express';
import { configureCORS } from './middlewares/cors-middleware.js';
import router from './routes/index.js';
import swaggerUI from 'swagger-ui-express';
import swaggerDocs from './swagger.json';

const PORT = process.env.PORT || 3000;
const app = express();

configureCORS(app);

app.use('/', router);

router.use('/documentation', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
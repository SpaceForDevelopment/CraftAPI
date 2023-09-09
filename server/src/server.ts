import express from 'express';
import { configureCORS } from './middlewares/cors-middleware.js';
import router from './routes/index.js';

const PORT = process.env.PORT || 3000;
const app = express();

configureCORS(app);

app.use('/', router);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
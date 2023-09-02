import express from 'express';
import { configureCORS } from './middlewares/cors-middleware.js';
import { getIndex } from './controllers/index-controller.js';
import { getMobs } from './controllers/mob-controller.js';

const PORT = process.env.PORT || 3333;
const app = express();

configureCORS(app);

app.get('/', getIndex);
app.get('/mobs', getMobs);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
import express, { Request, Response } from 'express';
import { configureCORS } from './middlewares/cors-middleware.js';
import { mobRouter } from './routes/mobs-route.js';
import { indexRouter } from './routes/index-route.js';
import { equipmentRouter } from './routes/equipment-route.js';
import { oreRouter } from './routes/ores-route.js';
import { errorMiddleware } from './middlewares/error-middleware.js';
const { connectDatabase } = require('./database/db.js');

const app = express();

app.use(express.json());
connectDatabase();
configureCORS(app);
app.use(errorMiddleware);

app.use('/', indexRouter);
app.use('/mobs', mobRouter);
app.use('/equipment', equipmentRouter);
app.use('/ores', oreRouter);

app.use((req: Request, res: Response) => {
    res.status(404).json({
        message: 'Rota não encontrada.',
    });
});

export { app };

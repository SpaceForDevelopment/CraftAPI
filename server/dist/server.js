"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_middleware_js_1 = require("./middlewares/cors-middleware.js");
const mobs_route_js_1 = __importDefault(require("./routes/mobs-route.js"));
const equipment_route_js_1 = __importDefault(require("./routes/equipment-route.js"));
const ores_route_js_1 = __importDefault(require("./routes/ores-route.js"));
const error_middleware_js_1 = require("./middlewares/error-middleware.js");
const index_router_js_1 = __importDefault(require("./routes/index-router.js"));
const connectDatabase = require('./database/db.js');
const port = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
connectDatabase();
(0, cors_middleware_js_1.configureCORS)(app);
app.use(error_middleware_js_1.errorMiddleware);
app.use('/', index_router_js_1.default);
app.use('/mobs', mobs_route_js_1.default);
app.use('/equipment', equipment_route_js_1.default);
app.use('/ores', ores_route_js_1.default);
app.use((req, res) => {
    res.status(404).json({
        message: 'Rota não encontrada.'
    });
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

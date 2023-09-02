"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_middleware_js_1 = require("./middlewares/cors-middleware.js");
const index_controller_js_1 = require("./controllers/index-controller.js");
const mob_controller_js_1 = require("./controllers/mob-controller.js");
const PORT = process.env.PORT || 3333;
const app = (0, express_1.default)();
(0, cors_middleware_js_1.configureCORS)(app);
app.get('/', index_controller_js_1.getIndex);
app.get('/mobs', mob_controller_js_1.getMobs);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_middleware_js_1 = require("./middlewares/cors-middleware.js");
const index_js_1 = __importDefault(require("./routes/index.js"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_json_1 = __importDefault(require("./swagger.json"));
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
(0, cors_middleware_js_1.configureCORS)(app);
app.use('/', index_js_1.default);
index_js_1.default.use('/documentation', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

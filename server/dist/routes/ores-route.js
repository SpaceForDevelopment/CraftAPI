"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ore_controller_js_1 = require("../controllers/ore-controller.js");
const token_middleware_1 = require("../middlewares/token-middleware");
const oreRouter = express_1.default.Router();
oreRouter.get('/', ore_controller_js_1.findAllOresController);
oreRouter.get('/search', ore_controller_js_1.findOreByIdController);
oreRouter.post('/', token_middleware_1.verifyTokenInBack, ore_controller_js_1.createOreController);
oreRouter.put('/:id', token_middleware_1.verifyTokenInBack, ore_controller_js_1.updateOreController);
oreRouter.delete('/:id', token_middleware_1.verifyTokenInBack, ore_controller_js_1.deleteOreController);
exports.default = oreRouter;

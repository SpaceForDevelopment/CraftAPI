"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mob_controller_js_1 = require("../controllers/mob-controller.js");
const token_middleware_1 = require("../middlewares/token-middleware");
const mobRouter = express_1.default.Router();
mobRouter.get('/', mob_controller_js_1.findAllMobsController);
mobRouter.get('/search', mob_controller_js_1.findMobByIdController);
mobRouter.post('/', token_middleware_1.verifyTokenInBack, mob_controller_js_1.createMobController);
mobRouter.put('/:id', token_middleware_1.verifyTokenInBack, mob_controller_js_1.updateMobController);
mobRouter.delete('/:id', token_middleware_1.verifyTokenInBack, mob_controller_js_1.deleteMobController);
exports.default = mobRouter;

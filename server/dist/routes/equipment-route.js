"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.equipmentRouter = void 0;
const express_1 = __importDefault(require("express"));
const equipment_controller_js_1 = require("../controllers/equipment-controller.js");
const token_middleware_1 = require("../middlewares/token-middleware");
const equipmentRouter = express_1.default.Router();
exports.equipmentRouter = equipmentRouter;
equipmentRouter.get('/', equipment_controller_js_1.findAllEquipmentController);
equipmentRouter.get('/search', equipment_controller_js_1.findEquipmentByIdController);
equipmentRouter.post('/', token_middleware_1.verifyTokenInBack, equipment_controller_js_1.createEquipmentController);
equipmentRouter.put('/:id', token_middleware_1.verifyTokenInBack, equipment_controller_js_1.updateEquipmentController);
equipmentRouter.delete('/:id', token_middleware_1.verifyTokenInBack, equipment_controller_js_1.deleteEquipmentController);

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_controller_js_1 = require("../controllers/index-controller.js");
const mobs_controller_js_1 = require("../controllers/mobs-controller.js");
const router = express_1.default.Router();
router.get('/', index_controller_js_1.getIndex);
router.get('/mobs', mobs_controller_js_1.getMobs);
exports.default = router;

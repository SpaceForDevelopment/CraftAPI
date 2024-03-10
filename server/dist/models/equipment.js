"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Equipment = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const EquipmentSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    materials: {
        type: String,
        required: true,
    },
    durability: {
        type: String,
        required: true,
    },
    rarity: {
        type: String,
        required: true,
    },
    renewable: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
});
exports.Equipment = mongoose_1.default.model('Equipment', EquipmentSchema);

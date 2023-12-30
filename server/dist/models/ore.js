"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const OreSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    availability: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    minimumPickaxe: {
        type: String,
        required: true,
    },
    explosionResistance: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
});
const Ore = mongoose_1.default.model('Ore', OreSchema);
exports.default = Ore;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mob = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const MobSchema = new mongoose_1.default.Schema({
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
    hitPoints: {
        type: String,
        required: true,
    },
    javaEdition: {
        type: String,
        required: true,
    },
    bedrockEdition: {
        type: String,
        required: true,
    },
    educationEdition: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
});
exports.Mob = mongoose_1.default.model('Mob', MobSchema);

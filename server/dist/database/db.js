"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDatabase = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const connectDatabase = () => {
    console.log('Wait connecting to the database');
    mongoose_1.default.connect(`${process.env.DATABASE_URL}`)
        .then(() => console.log('MongoDB Atlas Connected'))
        .catch((error) => console.log(error));
};
exports.connectDatabase = connectDatabase;

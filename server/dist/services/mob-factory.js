"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const mob_js_1 = __importDefault(require("../models/mob.js"));
class MobFactory {
    constructor(file) {
        this._data = fs_1.default.readFileSync(file, 'utf-8');
    }
    get mobs() {
        const list = [];
        let lines = this.readLines();
        for (let i = 1; i < lines.length; i++) {
            let columns = this.readColumns(lines[i]);
            try {
                const mob = this.create(columns);
                list.push(mob);
            }
            catch (error) {
                console.error('Erro ao criar mob:', error);
            }
        }
        return list;
    }
    readLines() {
        return this._data.split('\n');
    }
    readColumns(line) {
        return line.split(',');
    }
    create(columns) {
        if (!columns[0]) {
            throw new Error();
        }
        const id = parseInt(columns[0].trim());
        const name = columns[1].trim();
        const type = columns[2].trim();
        const role = columns[3].trim();
        const hitPoints = columns[4].trim();
        const javaEdition = columns[5].trim();
        const bedrockEdition = columns[6].trim();
        const educationEdition = columns[7].trim();
        const image = columns[8].trim();
        return new mob_js_1.default(id, name, type, role, hitPoints, javaEdition, bedrockEdition, educationEdition, image);
    }
}
exports.default = MobFactory;

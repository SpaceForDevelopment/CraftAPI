"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OreFactory = void 0;
const fs_1 = __importDefault(require("fs"));
const ore_js_1 = __importDefault(require("../models/ore.js"));
class OreFactory {
    constructor(file) {
        this._data = fs_1.default.readFileSync(file, 'utf-8');
    }
    getOres() {
        const list = [];
        let lines = this.readLines();
        for (let i = 1; i < lines.length; i++) {
            let columns = this.readColumns(lines[i]);
            try {
                const ore = this.create(columns);
                list.push(ore);
            }
            catch (error) {
                console.error('Error creating ore:', error);
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
        const availability = columns[2].trim();
        const description = columns[3].trim();
        const rarity = columns[4].trim();
        const minimumPickaxe = columns[5].trim();
        const explosionResistance = columns[6].trim();
        const image = columns[7].trim();
        return new ore_js_1.default(id, name, availability, description, rarity, minimumPickaxe, explosionResistance, image);
    }
}
exports.OreFactory = OreFactory;

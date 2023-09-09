"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EquipmentFactory = void 0;
const fs_1 = __importDefault(require("fs"));
const equipment_js_1 = __importDefault(require("../models/equipment.js"));
class EquipmentFactory {
    constructor(file) {
        this._data = fs_1.default.readFileSync(file, 'utf-8');
    }
    getEquipment() {
        const list = [];
        let lines = this.readLines();
        for (let i = 1; i < lines.length; i++) {
            let columns = this.readColumns(lines[i]);
            try {
                const equipment = this.create(columns);
                list.push(equipment);
            }
            catch (error) {
                console.error('Error creating equipment:', error);
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
        const materials = columns[4].trim();
        const durability = columns[5].trim();
        const rarity = columns[6].trim();
        const renewable = columns[7].trim();
        const image = columns[8].trim();
        return new equipment_js_1.default(id, name, type, role, materials, durability, rarity, renewable, image);
    }
}
exports.EquipmentFactory = EquipmentFactory;

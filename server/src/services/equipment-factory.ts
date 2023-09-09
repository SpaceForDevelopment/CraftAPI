import fs from 'fs';
import Equipment from '../models/equipment.js';

export class EquipmentFactory {
    private _data: string;

    constructor(file: string) {
        this._data = fs.readFileSync(file, 'utf-8');
    }

    getEquipment(): Equipment[] {
        const list: Equipment[] = [];
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

    private readLines(): string[] {
        return this._data.split('\n');
    }

    private readColumns(line: string): string[] {
        return line.split(',');
    }

    private create(columns: string[]): Equipment {
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
        
        return new Equipment(id, name, type, role, materials, durability, rarity, renewable, image);
    }
}
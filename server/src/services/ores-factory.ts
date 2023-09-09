import fs from 'fs';
import Ore from '../models/ore.js';

export class OreFactory {
    private _data: string;

    constructor(file: string) {
        this._data = fs.readFileSync(file, 'utf-8');
    }

    getOres(): Ore[] {
        const list: Ore[] = [];
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

    private readLines(): string[] {
        return this._data.split('\n');
    }

    private readColumns(line: string): string[] {
        return line.split(',');
    }

    private create(columns: string[]): Ore {
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
        
        return new Ore(id, name, availability, description, rarity, minimumPickaxe, explosionResistance, image);
    }
}
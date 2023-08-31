import fs from 'fs';
import Mob from '../models/mob.js';

export class MobFactory {
    private _data: string;

    constructor(file: string) {
        this._data = fs.readFileSync(file, 'utf-8');
    }

    getMobs(): Mob[] {
        const list: Mob[] = [];
        let lines = this.readLines();

        for (let i = 1; i < lines.length; i++) {
            let columns = this.readColumns(lines[i]);

            try {
                const mob = this.create(columns);
                list.push(mob);
            } catch (error) {
                console.error('Error creating mob:', error);
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

    private create(columns: string[]): Mob {
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
        
        return new Mob(id, name, type, role, hitPoints, javaEdition, bedrockEdition, educationEdition, image);
    }
}
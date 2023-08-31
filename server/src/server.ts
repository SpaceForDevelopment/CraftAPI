import express, { Request, Response } from 'express';
import MobFactory from './services/mob-factory.js';
import Mob from './models/mob.js';

const PORT = process.env.PORT || 3333;

const app = express();

let mobsData: Mob[] = [];

try {
    mobsData = new MobFactory('./data/mobs.csv').mobs;
} 
catch (error) {
    console.error('Error loading mobs data:', error);
    mobsData = [];
}

function renameKeysWithPrefixRemoval(obj: any) {
    const renamedObj: any = {};

    for (const key in obj) {
        if (key.startsWith('_')) {
            const newKey = key.substr(1);
            renamedObj[newKey] = obj[key];
        } 
        else {
            renamedObj[key] = obj[key];
        }
    }

    return renamedObj;
}

const renamedMobsData = mobsData.map((mob) => renameKeysWithPrefixRemoval(mob));

app.get('/', (req: Request, res: Response) => {
    const duo = 'Artur Bomtempo e Letícia França';
    const idClass = '3D1';
    const subject = 'Framework';
    const school = 'Colégio Cotemig';

    res.status(200).json({
        duo: duo,
        class: idClass,
        subject: subject,
        school: school
    });
});

app.get('/mobs', (req: Request, res: Response) => {
    res.status(200).json(renamedMobsData);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
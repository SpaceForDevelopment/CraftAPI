import { Request, Response } from 'express';
import { MobFactory } from '../services/mobs-factory.js';
import { removePrefixFromKeys } from '../utils/remove-prefix-keys.js';

export const getMobs = (req: Request, res: Response) => {
    const mobFactory = new MobFactory('./data/mobs.csv');
    const mobsData = mobFactory.getMobs();
    const idQueryParam = req.query.id;

    if (idQueryParam && typeof idQueryParam === 'string') {
        const mobId = parseInt(idQueryParam);
        const selectedMob = mobsData.find(mob => mob.id === mobId);

        if (selectedMob) {
            const mobData  = removePrefixFromKeys(selectedMob);
            res.status(200).json(mobData);
            return;
        }
    }

    const renamedMobsData = mobsData.map((mob) => removePrefixFromKeys(mob));
    
    res.status(200).json(renamedMobsData);
}
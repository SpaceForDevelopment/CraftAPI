import { Request, Response } from 'express';
import { OreFactory } from '../services/ores-factory.js';
import { removePrefixFromKeys } from '../utils/remove-prefix-keys.js';

export const getOres = (req: Request, res: Response) => {
    const oreFactory = new OreFactory('./data/ores.csv');
    const oresData = oreFactory.getOres();
    const idQueryParam = req.query.id;

    if (idQueryParam && typeof idQueryParam === 'string') {
        const oreId = parseInt(idQueryParam);
        const selectedOre = oresData.find(ore => ore.id === oreId);

        if (selectedOre) {
            const oreData  = removePrefixFromKeys(selectedOre);
            res.status(200).json(oreData);
            return;
        }
    }

    const renamedOresData = oresData.map((ore) => removePrefixFromKeys(ore));
    
    res.status(200).json(renamedOresData);
}
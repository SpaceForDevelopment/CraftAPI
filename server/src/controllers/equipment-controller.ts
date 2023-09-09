import { Request, Response } from 'express';
import { EquipmentFactory } from '../services/equipment-factory.js';
import { removePrefixFromKeys } from '../utils/remove-prefix-keys.js';

export const getEquipment = (req: Request, res: Response) => {
    const equipmentFactory = new EquipmentFactory('./data/equipment.csv');
    const equipmentData = equipmentFactory.getEquipment();
    const idQueryParam = req.query.id;

    if (idQueryParam && typeof idQueryParam === 'string') {
        const equipmentId = parseInt(idQueryParam);
        const selectedEquipment = equipmentData.find(equipment => equipment.id === equipmentId);

        if (selectedEquipment) {
            const equipmentData = removePrefixFromKeys(selectedEquipment);
            res.status(200).json(equipmentData);
            return;
        }
    }

    const renamedEquipmentData = equipmentData.map((equipment) => removePrefixFromKeys(equipment));

    res.status(200).json(renamedEquipmentData);
}
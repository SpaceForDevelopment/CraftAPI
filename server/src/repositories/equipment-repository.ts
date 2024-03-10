import mongoose from 'mongoose';
import { EquipmentInterface } from '../interfaces/equipment-interface.js';
import { Equipment } from '../models/equipment.js';

export const findAllEquipmentRepository = () => Equipment.find();

export const findEquipmentByIdRepository = (idEquipment: string) => Equipment.findById(idEquipment);

export const createEquipmentRepository = ({
    name,
    type,
    role,
    materials,
    durability,
    rarity,
    renewable,
    image,
}: EquipmentInterface) =>
    Equipment.create({
        name,
        type,
        role,
        materials,
        durability,
        rarity,
        renewable,
        image,
    });

export const updateEquipmentRepository = async (id: string, equipmentData: Partial<EquipmentInterface>): Promise<mongoose.Document | null> => {
    const updatedEquipment = await Equipment.findOneAndUpdate (
        { _id: id },
        { ...equipmentData },
        { rawResult: true }
    );

    return updatedEquipment;
}

export const deleteEquipmentRepository = (id: string) => Equipment.findOneAndDelete({ _id: id }, { rawResult: true });
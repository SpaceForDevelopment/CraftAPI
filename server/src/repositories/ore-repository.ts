import mongoose from 'mongoose';
import { OreInterface } from '../interfaces/ore-interface.js';
import { Ore } from '../models/ore.js';

export const findAllOresRepository = () => Ore.find();

export const findOreByIdRepository = (idOre: string) => Ore.findById(idOre);

export const createOreRepository = ({
    name,
    type,
    availability,
    description,
    minimumPickaxe,
    explosionResistance,
    image,
}: OreInterface) =>
    Ore.create({
        name,
        type,
        availability,
        description,
        minimumPickaxe,
        explosionResistance,
        image,
    });

export const updateOreRepository = async (
    id: string,
    oreData: Partial<OreInterface>
): Promise<mongoose.Document | null> => {
    const updatedOre = await Ore.findOneAndUpdate(
        { _id: id },
        { ...oreData },
        { rawResult: true }
    );

    return updatedOre;
};

export const deleteOreRepository = (id: string) =>
    Ore.findOneAndDelete({ _id: id }, { rawResult: true });

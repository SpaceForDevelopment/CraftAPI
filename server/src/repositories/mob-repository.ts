import mongoose from 'mongoose';
import { MobInterface } from '../interfaces/mob-interface.js';
import Mob from '../models/mob.js';

export const findAllMobsRepository = () => Mob.find();

export const findMobByIdRepository = (idMob: string) => Mob.findById(idMob);

export const createMobRepository = ({
    name,
    type,
    role,
    hitPoints,
    javaEdition,
    bedrockEdition,
    educationEdition,
    image,
}: MobInterface) => 
    Mob.create({
        name,
        type,
        role,
        hitPoints,
        javaEdition,
        bedrockEdition,
        educationEdition,
        image,
    });

export const updateMobRepository = async (id: string, mobData: Partial<MobInterface>): Promise<mongoose.Document | null> => {
    const updatedMob = await Mob.findOneAndUpdate (
        { _id: id },
        { ...mobData },
        { rawResult: true }
    );
    
    return updatedMob;
};

export const deleteMobRepository = (id: string) => Mob.findOneAndDelete({ _id: id }, { rawResult: true });
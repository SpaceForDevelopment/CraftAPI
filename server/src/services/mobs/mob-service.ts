import { MobInterface } from '../../interfaces/mob-interface.js';
import * as mobRepository from '../../repositories/mob-repository.js';
import { validateMobData } from './mobValidations-service.js';

export const findAllMobsService = async () => {
    try {
        const mobs = await mobRepository.findAllMobsRepository();
        return mobs;
    }
    catch (error) {
        throw new Error((error as Error).message);
    }
};

export const findMobByIdService = async (idMob: string) => {
    try {
        if (!idMob) {
            throw new Error('Id do mob não informado!');
        }

        const mob = await mobRepository.findMobByIdRepository(idMob);

        if (!mob) {
            throw new Error('Mob não encontrado!');
        }

        return mob;
    } 
    catch (error) {
        throw new Error((error as Error).message);
    }
};

export const createMobService = async (mobData: MobInterface) => {
    try {
        validateMobData(mobData);

        const createdMob = await mobRepository.createMobRepository(mobData);

        return createdMob;
    }
    catch (error) {
        throw new Error((error as Error).message);
    }
};

export const updateMobService = async (idMob: string, mobData: MobInterface) => {
    try {
        validateMobData(mobData);

        const updatedMob = await mobRepository.updateMobRepository(idMob, mobData);

        if (!updatedMob) {
            throw new Error('Mob não encontrado!');
        }

        const updatedMobDocument = await mobRepository.findMobByIdRepository(idMob);

        if (!updatedMobDocument) {
            throw new Error('Mob não encontrado!');
        }

        return updatedMobDocument;
    }
    catch (error) {
        throw new Error((error as Error).message);
    }
};

export const deleteMobService = async (idMob: string) => {
    try {
        const deletedMob = await mobRepository.deleteMobRepository(idMob);

        if (!deletedMob) {
            throw new Error('Mob não encontrado!');
        }

        return deletedMob;
    }
    catch (error) {
        throw new Error((error as Error).message);
    }
};
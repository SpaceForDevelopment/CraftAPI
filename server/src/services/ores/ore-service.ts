import { OreInterface } from '../../interfaces/ore-interface.js';
import * as oreRepository from '../../repositories/ore-repository.js';
import { validateOreData } from './oreValidations-service.js';

export const findAllOresService = async () => {
    try {
        const ores = await oreRepository.findAllOresRepository();
        return ores;
    }
    catch (error) {
        throw new Error((error as Error).message);
    }
};

export const findOreByIdService = async (idOre: string) => {
    try {
        if (!idOre) {
            throw new Error('Id do minério não informado!');
        }

        const ore = await oreRepository.findOreByIdRepository(idOre);

        if (!ore) {
            throw new Error('Minério não encontrado!');
        }

        return ore;
    } 
    catch (error) {
        throw new Error((error as Error).message);
    }
};

export const createOreService = async (oreData: OreInterface) => {
    try {
        validateOreData(oreData);

        const createdOre = await oreRepository.createOreRepository(oreData);

        return createdOre;
    }
    catch (error) {
        throw new Error((error as Error).message);
    }
};

export const updateOreService = async (idOre: string, oreData: OreInterface) => {
    try {
        validateOreData(oreData);

        const updatedOre = await oreRepository.updateOreRepository(idOre, oreData);

        if (!updatedOre) {
            throw new Error('Minério não encontrado!');
        }

        const updatedOreDocument = await oreRepository.findOreByIdRepository(idOre);

        if (!updatedOreDocument) {
            throw new Error('Minério não encontrado!');
        }

        return updatedOreDocument;
    }
    catch (error) {
        throw new Error((error as Error).message);
    }
};

export const deleteOreService = async (idOre: string) => {
    try {
        const deletedOre = await oreRepository.deleteOreRepository(idOre);

        if (!deletedOre) {
            throw new Error('Minério não encontrado!');
        }

        return deletedOre;
    }
    catch (error) {
        throw new Error((error as Error).message);
    }
};
import { EquipmentInterface } from '../../interfaces/equipment-interface.js';
import {
    createEquipmentRepository,
    deleteEquipmentRepository,
    findAllEquipmentRepository,
    findEquipmentByIdRepository,
    updateEquipmentRepository,
} from '../../repositories/equipment-repository.js';
import { validateEquipmentData } from './equipmentValidations-service.js';

export const findAllEquipmentService = async () => {
    try {
        const equipment = await findAllEquipmentRepository();
        return equipment;
    } catch (error) {
        throw new Error((error as Error).message);
    }
};

export const findEquipmentByIdService = async (idEquipment: string) => {
    try {
        if (!idEquipment) {
            throw new Error('Id do equipamento não informado!');
        }

        const equipment = await findEquipmentByIdRepository(idEquipment);

        if (!equipment) {
            throw new Error('Equipamento não encontrado!');
        }

        return equipment;
    } catch (error) {
        throw new Error((error as Error).message);
    }
};

export const createEquipmentService = async (equipmentData: EquipmentInterface) => {
    try {
        validateEquipmentData(equipmentData);

        const createdEquipment = await createEquipmentRepository(equipmentData);

        return createdEquipment;
    } catch (error) {
        throw new Error((error as Error).message);
    }
};

export const updateEquipmentService = async (
    idEquipment: string,
    equipmentData: EquipmentInterface
) => {
    try {
        validateEquipmentData(equipmentData);

        const updatedEquipment = await updateEquipmentRepository(idEquipment, equipmentData);

        if (!updatedEquipment) {
            throw new Error('Equipamento não encontrado!');
        }

        const updatedEquipmentDocument = await findEquipmentByIdRepository(idEquipment);

        if (!updatedEquipmentDocument) {
            throw new Error('Equipamento não encontrado!');
        }

        return updatedEquipmentDocument;
    } catch (error) {
        throw new Error((error as Error).message);
    }
};

export const deleteEquipmentService = async (idEquipment: string) => {
    try {
        const deletedEquipment = await deleteEquipmentRepository(idEquipment);

        if (!deletedEquipment) {
            throw new Error('Equipamento não encontrado!');
        }

        return deletedEquipment;
    } catch (error) {
        throw new Error((error as Error).message);
    }
};

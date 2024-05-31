import { Request, Response } from 'express';
import { EquipmentInterface } from '../interfaces/equipment-interface.js';
import { validateEquipmentData } from '../services/equipment/equipmentValidations-service.js';
import {
    createEquipmentService,
    deleteEquipmentService,
    findAllEquipmentService,
    findEquipmentByIdService,
    updateEquipmentService,
} from '../services/equipment/equipment-service.js';

export const findAllEquipmentController = async (req: Request, res: Response) => {
    try {
        const equipment = await findAllEquipmentService();

        res.status(200).json({
            Equipment: equipment,
        });
    } catch (error) {
        res.status(404).json({
            message: (error as Error).message,
        });
    }
};

export const findEquipmentByIdController = async (req: Request, res: Response) => {
    try {
        const idEquipment = req.query.id as string | undefined;

        if (!idEquipment) {
            throw new Error('O "id" não foi fornecido na consulta.');
        }

        const equipment = await findEquipmentByIdService(idEquipment);

        res.status(200).json({
            Equipment: equipment,
        });
    } catch (error) {
        if (error instanceof Error && error.message.includes('Cast to ObjectId failed')) {
            res.status(400).json({
                message: 'O "id" fornecido não é válido para exibição do equipamento.',
            });
        } else {
            res.status(500).json({
                message: (error as Error).message,
            });
        }
    }
};

export const createEquipmentController = async (req: Request, res: Response) => {
    try {
        const equipmentData = req.body as EquipmentInterface;

        validateEquipmentData(equipmentData);

        const createdEquipment = await createEquipmentService(equipmentData);

        res.status(201).json({
            message: 'Equipamento criado com sucesso',
            Equipment: createdEquipment,
        });
    } catch (error) {
        res.status(500).json({
            message: (error as Error).message,
        });
    }
};

export const updateEquipmentController = async (req: Request, res: Response) => {
    try {
        const idEquipment = req.params.id as string | undefined;
        const equipmentData = req.body as EquipmentInterface;

        if (!idEquipment) {
            throw new Error('O parâmetro "id" não foi fornecido na consulta.');
        }

        validateEquipmentData(equipmentData);

        const updatedEquipment = await updateEquipmentService(idEquipment, equipmentData);

        res.status(200).json({
            message: 'Dados atualizados com sucesso.',
            Equipment: updatedEquipment,
        });
    } catch (error) {
        if (error instanceof Error && error.message.includes('Cast to ObjectId failed')) {
            res.status(400).json({
                message: 'O "id" fornecido não é válido para atualização do equipamento.',
            });
        } else {
            res.status(500).json({
                message: (error as Error).message,
            });
        }
    }
};

export const deleteEquipmentController = async (req: Request, res: Response) => {
    try {
        const idEquipment = req.params.id as string | undefined;

        if (!idEquipment) {
            throw new Error('O parâmetro "id" não foi fornecido na consulta.');
        }

        await deleteEquipmentService(idEquipment);

        res.status(200).json({
            message: 'Exclusão feita com sucesso!',
        });
    } catch (error) {
        if (error instanceof Error && error.message.includes('Cast to ObjectId failed')) {
            res.status(400).json({
                message: 'O "id" fornecido não é válido para exclusão do equipamento.',
            });
        } else {
            res.status(500).json({
                message: (error as Error).message,
            });
        }
    }
};

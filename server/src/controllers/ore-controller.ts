import { Request, Response } from 'express';
import { OreInterface } from '../interfaces/ore-interface.js';
import { validateOreData } from '../services/ores/oreValidations-service.js';
import {
    createOreService,
    deleteOreService,
    findAllOresService,
    findOreByIdService,
    updateOreService,
} from '../services/ores/ore-service.js';

export const findAllOresController = async (req: Request, res: Response) => {
    try {
        const ores = await findAllOresService();

        res.status(200).json({
            Ores: ores,
        });
    } catch (error) {
        res.status(404).json({
            message: (error as Error).message,
        });
    }
};

export const findOreByIdController = async (req: Request, res: Response) => {
    try {
        const idOre = req.query.id as string | undefined;

        if (!idOre) {
            throw new Error('O "id" não foi fornecido na consulta.');
        }

        const ore = await findOreByIdService(idOre);

        res.status(200).json({
            Ore: ore,
        });
    } catch (error) {
        if (error instanceof Error && error.message.includes('Cast to ObjectId failed')) {
            res.status(400).json({
                message: 'O "id" fornecido não é válido para exibição do minério.',
            });
        } else {
            res.status(500).json({
                message: (error as Error).message,
            });
        }
    }
};

export const createOreController = async (req: Request, res: Response) => {
    try {
        const oreData = req.body as OreInterface;

        validateOreData(oreData);

        const createdOre = await createOreService(oreData);

        res.status(201).json({
            message: 'Minério criado com sucesso',
            Ore: createdOre,
        });
    } catch (error) {
        res.status(500).json({
            message: (error as Error).message,
        });
    }
};

export const updateOreController = async (req: Request, res: Response) => {
    try {
        const idOre = req.params.id as string | undefined;
        const oreData = req.body as OreInterface;

        if (!idOre) {
            throw new Error('O parâmetro "id" não foi fornecido na consulta.');
        }

        validateOreData(oreData);

        const updatedOre = await updateOreService(idOre, oreData);

        res.status(200).json({
            message: 'Dados atualizados com sucesso.',
            Ore: updatedOre,
        });
    } catch (error) {
        if (error instanceof Error && error.message.includes('Cast to ObjectId failed')) {
            res.status(400).json({
                message: 'O "id" fornecido não é válido para atualização do minério.',
            });
        } else {
            res.status(500).json({
                message: (error as Error).message,
            });
        }
    }
};

export const deleteOreController = async (req: Request, res: Response) => {
    try {
        const idOre = req.params.id as string | undefined;

        if (!idOre) {
            throw new Error('O parâmetro "id" não foi fornecido na consulta.');
        }

        await deleteOreService(idOre);

        res.status(200).json({
            message: 'Exclusão feita com sucesso!',
        });
    } catch (error) {
        if (error instanceof Error && error.message.includes('Cast to ObjectId failed')) {
            res.status(400).json({
                message: 'O "id" fornecido não é válido para exclusão do minério.',
            });
        } else {
            res.status(500).json({
                message: (error as Error).message,
            });
        }
    }
};

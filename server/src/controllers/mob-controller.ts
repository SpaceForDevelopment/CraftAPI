import { Request, Response } from 'express';
import { MobInterface } from '../interfaces/mob-interface.js';
import * as mobService from '../services/mobs/mob-service.js';
import { validateMobData } from '../services/mobs/mobValidations-service.js';

export const findAllMobsController = async (req: Request, res: Response) => {
    try {
        const mobs = await mobService.findAllMobsService();

        res.status(200).json({
            Mobs: mobs
        });
    }
    catch (error) {
        res.status(404).json({
            message: (error as Error).message
        });
    }
};

export const findMobByIdController = async (req: Request, res: Response) => {
    try {
        const idMob = req.query.id as string | undefined;

        if (!idMob) {
            throw new Error("O 'id' não foi fornecido na consulta.");
        }

        const mob = await mobService.findMobByIdService(idMob);

        res.status(200).json({
            Mob: mob
        });
    }
    catch (error) {
        res.status(404).json({
            message: (error as Error).message
        });
    }
};

export const createMobController = async (req: Request, res: Response) => {
    try {
        const mobData = req.body as MobInterface;

        validateMobData(mobData);

        const createdMob = await mobService.createMobService(mobData);

        res.status(201).json({
            message: 'Mob criado com sucesso',
            Mob: createdMob,
        });
    }
    catch (error) {
        res.status(500).json({
            message: (error as Error).message,
        });
    }
};

export const updateMobController = async (req: Request, res: Response) => {
    try {
        const idMob = req.params.id as string | undefined;
        const mobData = req.body as MobInterface;

        if (!idMob) {
            throw new Error("O parâmetro 'id' não foi fornecido na consulta.");
        }

        validateMobData(mobData);

        const updatedMob = await mobService.updateMobService(idMob, mobData);

        res.status(200).json({
            message: 'Dados atualizados com sucesso.',
            Mob: updatedMob,
        });
    }
    catch (error) {
        res.status(404).json({
            message: (error as Error).message,
        });
    }
};

export const deleteMobController = async (req: Request, res: Response) => {
    try {
        const idMob = req.params.id as string | undefined;

        if (!idMob) {
            throw new Error("O parâmetro 'id' não foi fornecido na consulta.");
        }

        await mobService.deleteMobService(idMob);

        res.status(200).json({
            message: 'Exclusão feita com sucesso!'
        });
    }
    catch (error) {
        res.status(404).json({
            message: (error as Error).message,
        });
    }
};
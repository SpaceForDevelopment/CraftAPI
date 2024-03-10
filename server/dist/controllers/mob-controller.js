"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMobController = exports.updateMobController = exports.createMobController = exports.findMobByIdController = exports.findAllMobsController = void 0;
const mobValidations_service_js_1 = require("../services/mobs/mobValidations-service.js");
const mob_service_js_1 = require("../services/mobs/mob-service.js");
const findAllMobsController = async (req, res) => {
    try {
        const mobs = await (0, mob_service_js_1.findAllMobsService)();
        res.status(200).json({
            Mobs: mobs
        });
    }
    catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
};
exports.findAllMobsController = findAllMobsController;
const findMobByIdController = async (req, res) => {
    try {
        const idMob = req.query.id;
        if (!idMob) {
            throw new Error('O "id" não foi fornecido na consulta.');
        }
        const mob = await (0, mob_service_js_1.findMobByIdService)(idMob);
        res.status(200).json({
            Mob: mob
        });
    }
    catch (error) {
        if (error instanceof Error && error.message.includes('Cast to ObjectId failed')) {
            res.status(400).json({
                message: 'O "id" fornecido não é válido para exibição do mob.',
            });
        }
        else {
            res.status(500).json({
                message: error.message,
            });
        }
    }
};
exports.findMobByIdController = findMobByIdController;
const createMobController = async (req, res) => {
    try {
        const mobData = req.body;
        (0, mobValidations_service_js_1.validateMobData)(mobData);
        const createdMob = await (0, mob_service_js_1.createMobService)(mobData);
        res.status(201).json({
            message: 'Mob criado com sucesso',
            Mob: createdMob,
        });
    }
    catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};
exports.createMobController = createMobController;
const updateMobController = async (req, res) => {
    try {
        const idMob = req.params.id;
        const mobData = req.body;
        if (!idMob) {
            throw new Error('O parâmetro "id" não foi fornecido na consulta.');
        }
        (0, mobValidations_service_js_1.validateMobData)(mobData);
        const updatedMob = await (0, mob_service_js_1.updateMobService)(idMob, mobData);
        res.status(200).json({
            message: 'Dados atualizados com sucesso.',
            Mob: updatedMob,
        });
    }
    catch (error) {
        if (error instanceof Error && error.message.includes('Cast to ObjectId failed')) {
            res.status(400).json({
                message: 'O "id" fornecido não é válido para atualização do mob.',
            });
        }
        else {
            res.status(500).json({
                message: error.message,
            });
        }
    }
};
exports.updateMobController = updateMobController;
const deleteMobController = async (req, res) => {
    try {
        const idMob = req.params.id;
        if (!idMob) {
            throw new Error('O parâmetro "id" não foi fornecido na consulta.');
        }
        await (0, mob_service_js_1.deleteMobService)(idMob);
        res.status(200).json({
            message: 'Exclusão feita com sucesso!'
        });
    }
    catch (error) {
        if (error instanceof Error && error.message.includes('Cast to ObjectId failed')) {
            res.status(400).json({
                message: 'O "id" fornecido não é válido para exclusão do mob.',
            });
        }
        else {
            res.status(500).json({
                message: error.message,
            });
        }
    }
};
exports.deleteMobController = deleteMobController;

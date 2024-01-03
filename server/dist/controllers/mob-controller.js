"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMobController = exports.updateMobController = exports.createMobController = exports.findMobByIdController = exports.findAllMobsController = void 0;
const mobService = __importStar(require("../services/mobs/mob-service.js"));
const mobValidations_service_js_1 = require("../services/mobs/mobValidations-service.js");
const findAllMobsController = async (req, res) => {
    try {
        const mobs = await mobService.findAllMobsService();
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
            throw new Error("O 'id' não foi fornecido na consulta.");
        }
        const mob = await mobService.findMobByIdService(idMob);
        res.status(200).json({
            Mob: mob
        });
    }
    catch (error) {
        if (error instanceof Error && error.message.includes('Cast to ObjectId failed')) {
            res.status(400).json({
                message: 'O ID fornecido não é válido para exibição do mob.',
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
        const createdMob = await mobService.createMobService(mobData);
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
            throw new Error("O parâmetro 'id' não foi fornecido na consulta.");
        }
        (0, mobValidations_service_js_1.validateMobData)(mobData);
        const updatedMob = await mobService.updateMobService(idMob, mobData);
        res.status(200).json({
            message: 'Dados atualizados com sucesso.',
            Mob: updatedMob,
        });
    }
    catch (error) {
        if (error instanceof Error && error.message.includes('Cast to ObjectId failed')) {
            res.status(400).json({
                message: 'O ID fornecido não é válido para atualização do mob.',
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
            throw new Error("O parâmetro 'id' não foi fornecido na consulta.");
        }
        await mobService.deleteMobService(idMob);
        res.status(200).json({
            message: 'Exclusão feita com sucesso!'
        });
    }
    catch (error) {
        if (error instanceof Error && error.message.includes('Cast to ObjectId failed')) {
            res.status(400).json({
                message: 'O ID fornecido não é válido para exclusão do mob.',
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

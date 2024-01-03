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
exports.deleteOreController = exports.updateOreController = exports.createOreController = exports.findOreByIdController = exports.findAllOresController = void 0;
const oreService = __importStar(require("../services/ores/ore-service.js"));
const oreValidations_service_js_1 = require("../services/ores/oreValidations-service.js");
const findAllOresController = async (req, res) => {
    try {
        const ores = await oreService.findAllOresService();
        res.status(200).json({
            Ores: ores
        });
    }
    catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
};
exports.findAllOresController = findAllOresController;
const findOreByIdController = async (req, res) => {
    try {
        const idOre = req.query.id;
        if (!idOre) {
            throw new Error("O 'id' não foi fornecido na consulta.");
        }
        const ore = await oreService.findOreByIdService(idOre);
        res.status(200).json({
            Ore: ore
        });
    }
    catch (error) {
        if (error instanceof Error && error.message.includes('Cast to ObjectId failed')) {
            res.status(400).json({
                message: 'O ID fornecido não é válido para exibição do minério.',
            });
        }
        else {
            res.status(500).json({
                message: error.message,
            });
        }
    }
};
exports.findOreByIdController = findOreByIdController;
const createOreController = async (req, res) => {
    try {
        const oreData = req.body;
        (0, oreValidations_service_js_1.validateOreData)(oreData);
        const createdOre = await oreService.createOreService(oreData);
        res.status(201).json({
            message: 'Minério criado com sucesso',
            Ore: createdOre,
        });
    }
    catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};
exports.createOreController = createOreController;
const updateOreController = async (req, res) => {
    try {
        const idOre = req.params.id;
        const oreData = req.body;
        if (!idOre) {
            throw new Error("O parâmetro 'id' não foi fornecido na consulta.");
        }
        (0, oreValidations_service_js_1.validateOreData)(oreData);
        const updatedOre = await oreService.updateOreService(idOre, oreData);
        res.status(200).json({
            message: 'Dados atualizados com sucesso.',
            Ore: updatedOre,
        });
    }
    catch (error) {
        if (error instanceof Error && error.message.includes('Cast to ObjectId failed')) {
            res.status(400).json({
                message: 'O ID fornecido não é válido para atualização do minério.',
            });
        }
        else {
            res.status(500).json({
                message: error.message,
            });
        }
    }
};
exports.updateOreController = updateOreController;
const deleteOreController = async (req, res) => {
    try {
        const idOre = req.params.id;
        if (!idOre) {
            throw new Error("O parâmetro 'id' não foi fornecido na consulta.");
        }
        await oreService.deleteOreService(idOre);
        res.status(200).json({
            message: 'Exclusão feita com sucesso!'
        });
    }
    catch (error) {
        if (error instanceof Error && error.message.includes('Cast to ObjectId failed')) {
            res.status(400).json({
                message: 'O ID fornecido não é válido para exclusão do minério.',
            });
        }
        else {
            res.status(500).json({
                message: error.message,
            });
        }
    }
};
exports.deleteOreController = deleteOreController;

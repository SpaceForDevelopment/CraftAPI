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
exports.deleteEquipmentController = exports.updateEquipmentController = exports.createEquipmentController = exports.findEquipmentByIdController = exports.findAllEquipmentController = void 0;
const equipmentService = __importStar(require("../services/equipment/equipment-service.js"));
const equipmentValidations_service_js_1 = require("../services/equipment/equipmentValidations-service.js");
const findAllEquipmentController = async (req, res) => {
    try {
        const equipment = await equipmentService.findAllEquipmentService();
        res.status(200).json({
            Equipment: equipment
        });
    }
    catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
};
exports.findAllEquipmentController = findAllEquipmentController;
const findEquipmentByIdController = async (req, res) => {
    try {
        const idEquipment = req.query.id;
        if (!idEquipment) {
            throw new Error("O 'id' não foi fornecido na consulta.");
        }
        const equipment = await equipmentService.findEquipmentByIdService(idEquipment);
        res.status(200).json({
            Equipment: equipment
        });
    }
    catch (error) {
        if (error instanceof Error && error.message.includes('Cast to ObjectId failed')) {
            res.status(400).json({
                message: 'O ID fornecido não é válido para exibição do equipamento.',
            });
        }
        else {
            res.status(500).json({
                message: error.message,
            });
        }
    }
};
exports.findEquipmentByIdController = findEquipmentByIdController;
const createEquipmentController = async (req, res) => {
    try {
        const equipmentData = req.body;
        (0, equipmentValidations_service_js_1.validateEquipmentData)(equipmentData);
        const createdEquipment = await equipmentService.createEquipmentService(equipmentData);
        res.status(201).json({
            message: 'Equipamento criado com sucesso',
            Equipment: createdEquipment,
        });
    }
    catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};
exports.createEquipmentController = createEquipmentController;
const updateEquipmentController = async (req, res) => {
    try {
        const idEquipment = req.params.id;
        const equipmentData = req.body;
        if (!idEquipment) {
            throw new Error("O parâmetro 'id' não foi fornecido na consulta.");
        }
        (0, equipmentValidations_service_js_1.validateEquipmentData)(equipmentData);
        const updatedEquipment = await equipmentService.updateEquipmentService(idEquipment, equipmentData);
        res.status(200).json({
            message: 'Dados atualizados com sucesso.',
            Equipment: updatedEquipment,
        });
    }
    catch (error) {
        if (error instanceof Error && error.message.includes('Cast to ObjectId failed')) {
            res.status(400).json({
                message: 'O ID fornecido não é válido para atualização do equipamento.',
            });
        }
        else {
            res.status(500).json({
                message: error.message,
            });
        }
    }
};
exports.updateEquipmentController = updateEquipmentController;
const deleteEquipmentController = async (req, res) => {
    try {
        const idEquipment = req.params.id;
        if (!idEquipment) {
            throw new Error("O parâmetro 'id' não foi fornecido na consulta.");
        }
        await equipmentService.deleteEquipmentService(idEquipment);
        res.status(200).json({
            message: 'Exclusão feita com sucesso!'
        });
    }
    catch (error) {
        if (error instanceof Error && error.message.includes('Cast to ObjectId failed')) {
            res.status(400).json({
                message: 'O ID fornecido não é válido para exclusão do equipamento.',
            });
        }
        else {
            res.status(500).json({
                message: error.message,
            });
        }
    }
};
exports.deleteEquipmentController = deleteEquipmentController;

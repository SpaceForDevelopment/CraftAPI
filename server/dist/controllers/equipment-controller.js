"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEquipmentController = exports.updateEquipmentController = exports.createEquipmentController = exports.findEquipmentByIdController = exports.findAllEquipmentController = void 0;
const equipmentValidations_service_js_1 = require("../services/equipment/equipmentValidations-service.js");
const equipment_service_js_1 = require("../services/equipment/equipment-service.js");
const findAllEquipmentController = async (req, res) => {
    try {
        const equipment = await (0, equipment_service_js_1.findAllEquipmentService)();
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
            throw new Error('O "id" não foi fornecido na consulta.');
        }
        const equipment = await (0, equipment_service_js_1.findEquipmentByIdService)(idEquipment);
        res.status(200).json({
            Equipment: equipment
        });
    }
    catch (error) {
        if (error instanceof Error && error.message.includes('Cast to ObjectId failed')) {
            res.status(400).json({
                message: 'O "id" fornecido não é válido para exibição do equipamento.',
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
        const createdEquipment = await (0, equipment_service_js_1.createEquipmentService)(equipmentData);
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
            throw new Error('O parâmetro "id" não foi fornecido na consulta.');
        }
        (0, equipmentValidations_service_js_1.validateEquipmentData)(equipmentData);
        const updatedEquipment = await (0, equipment_service_js_1.updateEquipmentService)(idEquipment, equipmentData);
        res.status(200).json({
            message: 'Dados atualizados com sucesso.',
            Equipment: updatedEquipment,
        });
    }
    catch (error) {
        if (error instanceof Error && error.message.includes('Cast to ObjectId failed')) {
            res.status(400).json({
                message: 'O "id" fornecido não é válido para atualização do equipamento.',
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
            throw new Error('O parâmetro "id" não foi fornecido na consulta.');
        }
        await (0, equipment_service_js_1.deleteEquipmentService)(idEquipment);
        res.status(200).json({
            message: 'Exclusão feita com sucesso!'
        });
    }
    catch (error) {
        if (error instanceof Error && error.message.includes('Cast to ObjectId failed')) {
            res.status(400).json({
                message: 'O "id" fornecido não é válido para exclusão do equipamento.',
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

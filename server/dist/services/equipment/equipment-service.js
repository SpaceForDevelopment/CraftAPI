"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEquipmentService = exports.updateEquipmentService = exports.createEquipmentService = exports.findEquipmentByIdService = exports.findAllEquipmentService = void 0;
const equipment_repository_js_1 = require("../../repositories/equipment-repository.js");
const equipmentValidations_service_js_1 = require("./equipmentValidations-service.js");
const findAllEquipmentService = async () => {
    try {
        const equipment = await (0, equipment_repository_js_1.findAllEquipmentRepository)();
        return equipment;
    }
    catch (error) {
        throw new Error(error.message);
    }
};
exports.findAllEquipmentService = findAllEquipmentService;
const findEquipmentByIdService = async (idEquipment) => {
    try {
        if (!idEquipment) {
            throw new Error('Id do equipamento não informado!');
        }
        const equipment = await (0, equipment_repository_js_1.findEquipmentByIdRepository)(idEquipment);
        if (!equipment) {
            throw new Error('Equipamento não encontrado!');
        }
        return equipment;
    }
    catch (error) {
        throw new Error(error.message);
    }
};
exports.findEquipmentByIdService = findEquipmentByIdService;
const createEquipmentService = async (equipmentData) => {
    try {
        (0, equipmentValidations_service_js_1.validateEquipmentData)(equipmentData);
        const createdEquipment = await (0, equipment_repository_js_1.createEquipmentRepository)(equipmentData);
        return createdEquipment;
    }
    catch (error) {
        throw new Error(error.message);
    }
};
exports.createEquipmentService = createEquipmentService;
const updateEquipmentService = async (idEquipment, equipmentData) => {
    try {
        (0, equipmentValidations_service_js_1.validateEquipmentData)(equipmentData);
        const updatedEquipment = await (0, equipment_repository_js_1.updateEquipmentRepository)(idEquipment, equipmentData);
        if (!updatedEquipment) {
            throw new Error('Equipamento não encontrado!');
        }
        const updatedEquipmentDocument = await (0, equipment_repository_js_1.findEquipmentByIdRepository)(idEquipment);
        if (!updatedEquipmentDocument) {
            throw new Error('Equipamento não encontrado!');
        }
        return updatedEquipmentDocument;
    }
    catch (error) {
        throw new Error(error.message);
    }
};
exports.updateEquipmentService = updateEquipmentService;
const deleteEquipmentService = async (idEquipment) => {
    try {
        const deletedEquipment = await (0, equipment_repository_js_1.deleteEquipmentRepository)(idEquipment);
        if (!deletedEquipment) {
            throw new Error('Equipamento não encontrado!');
        }
        return deletedEquipment;
    }
    catch (error) {
        throw new Error(error.message);
    }
};
exports.deleteEquipmentService = deleteEquipmentService;

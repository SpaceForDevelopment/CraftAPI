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
exports.deleteEquipmentService = exports.updateEquipmentService = exports.createEquipmentService = exports.findEquipmentByIdService = exports.findAllEquipmentService = void 0;
const equipmentRepository = __importStar(require("../../repositories/equipment-repository.js"));
const equipmentValidations_service_js_1 = require("./equipmentValidations-service.js");
const findAllEquipmentService = async () => {
    try {
        const equipment = await equipmentRepository.findAllEquipmentRepository();
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
        const equipment = await equipmentRepository.findEquipmentByIdRepository(idEquipment);
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
        const createdEquipment = await equipmentRepository.createEquipmentRepository(equipmentData);
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
        const updatedEquipment = await equipmentRepository.updateEquipmentRepository(idEquipment, equipmentData);
        if (!updatedEquipment) {
            throw new Error('Equipamento não encontrado!');
        }
        const updatedEquipmentDocument = await equipmentRepository.findEquipmentByIdRepository(idEquipment);
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
        const deletedEquipment = await equipmentRepository.deleteEquipmentRepository(idEquipment);
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

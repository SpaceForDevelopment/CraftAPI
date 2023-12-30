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
exports.deleteOreService = exports.updateOreService = exports.createOreService = exports.findOreByIdService = exports.findAllOresService = void 0;
const oreRepository = __importStar(require("../../repositories/ore-repository.js"));
const oreValidations_service_js_1 = require("./oreValidations-service.js");
const findAllOresService = async () => {
    try {
        const ores = await oreRepository.findAllOresRepository();
        return ores;
    }
    catch (error) {
        throw new Error(error.message);
    }
};
exports.findAllOresService = findAllOresService;
const findOreByIdService = async (idOre) => {
    try {
        if (!idOre) {
            throw new Error('Id do minério não informado!');
        }
        const ore = await oreRepository.findOreByIdRepository(idOre);
        if (!ore) {
            throw new Error('Minério não encontrado!');
        }
        return ore;
    }
    catch (error) {
        throw new Error(error.message);
    }
};
exports.findOreByIdService = findOreByIdService;
const createOreService = async (oreData) => {
    try {
        (0, oreValidations_service_js_1.validateOreData)(oreData);
        const createdOre = await oreRepository.createOreRepository(oreData);
        return createdOre;
    }
    catch (error) {
        throw new Error(error.message);
    }
};
exports.createOreService = createOreService;
const updateOreService = async (idOre, oreData) => {
    try {
        (0, oreValidations_service_js_1.validateOreData)(oreData);
        const updatedOre = await oreRepository.updateOreRepository(idOre, oreData);
        if (!updatedOre) {
            throw new Error('Minério não encontrado!');
        }
        const updatedOreDocument = await oreRepository.findOreByIdRepository(idOre);
        if (!updatedOreDocument) {
            throw new Error('Minério não encontrado!');
        }
        return updatedOreDocument;
    }
    catch (error) {
        throw new Error(error.message);
    }
};
exports.updateOreService = updateOreService;
const deleteOreService = async (idOre) => {
    try {
        const deletedOre = await oreRepository.deleteOreRepository(idOre);
        if (!deletedOre) {
            throw new Error('Minério não encontrado!');
        }
        return deletedOre;
    }
    catch (error) {
        throw new Error(error.message);
    }
};
exports.deleteOreService = deleteOreService;

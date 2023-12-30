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
exports.deleteMobService = exports.updateMobService = exports.createMobService = exports.findMobByIdService = exports.findAllMobsService = void 0;
const mobRepository = __importStar(require("../../repositories/mob-repository.js"));
const mobValidations_service_js_1 = require("./mobValidations-service.js");
const findAllMobsService = async () => {
    try {
        const mobs = await mobRepository.findAllMobsRepository();
        return mobs;
    }
    catch (error) {
        throw new Error(error.message);
    }
};
exports.findAllMobsService = findAllMobsService;
const findMobByIdService = async (idMob) => {
    try {
        if (!idMob) {
            throw new Error('Id do mob não informado!');
        }
        const mob = await mobRepository.findMobByIdRepository(idMob);
        if (!mob) {
            throw new Error('Mob não encontrado!');
        }
        return mob;
    }
    catch (error) {
        throw new Error(error.message);
    }
};
exports.findMobByIdService = findMobByIdService;
const createMobService = async (mobData) => {
    try {
        (0, mobValidations_service_js_1.validateMobData)(mobData);
        const createdMob = await mobRepository.createMobRepository(mobData);
        return createdMob;
    }
    catch (error) {
        throw new Error(error.message);
    }
};
exports.createMobService = createMobService;
const updateMobService = async (idMob, mobData) => {
    try {
        (0, mobValidations_service_js_1.validateMobData)(mobData);
        const updatedMob = await mobRepository.updateMobRepository(idMob, mobData);
        if (!updatedMob) {
            throw new Error('Mob não encontrado!');
        }
        const updatedMobDocument = await mobRepository.findMobByIdRepository(idMob);
        if (!updatedMobDocument) {
            throw new Error('Mob não encontrado!');
        }
        return updatedMobDocument;
    }
    catch (error) {
        throw new Error(error.message);
    }
};
exports.updateMobService = updateMobService;
const deleteMobService = async (idMob) => {
    try {
        const deletedMob = await mobRepository.deleteMobRepository(idMob);
        if (!deletedMob) {
            throw new Error('Mob não encontrado!');
        }
        return deletedMob;
    }
    catch (error) {
        throw new Error(error.message);
    }
};
exports.deleteMobService = deleteMobService;

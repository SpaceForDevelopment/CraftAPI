"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMobService = exports.updateMobService = exports.createMobService = exports.findMobByIdService = exports.findAllMobsService = void 0;
const mob_repository_js_1 = require("../../repositories/mob-repository.js");
const mobValidations_service_js_1 = require("./mobValidations-service.js");
const findAllMobsService = async () => {
    try {
        const mobs = await (0, mob_repository_js_1.findAllMobsRepository)();
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
        const mob = await (0, mob_repository_js_1.findMobByIdRepository)(idMob);
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
        const createdMob = await (0, mob_repository_js_1.createMobRepository)(mobData);
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
        const updatedMob = await (0, mob_repository_js_1.updateMobRepository)(idMob, mobData);
        if (!updatedMob) {
            throw new Error('Mob não encontrado!');
        }
        const updatedMobDocument = await (0, mob_repository_js_1.findMobByIdRepository)(idMob);
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
        const deletedMob = await (0, mob_repository_js_1.deleteMobRepository)(idMob);
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

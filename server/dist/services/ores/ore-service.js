"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOreService = exports.updateOreService = exports.createOreService = exports.findOreByIdService = exports.findAllOresService = void 0;
const ore_repository_js_1 = require("../../repositories/ore-repository.js");
const oreValidations_service_js_1 = require("./oreValidations-service.js");
const findAllOresService = async () => {
    try {
        const ores = await (0, ore_repository_js_1.findAllOresRepository)();
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
        const ore = await (0, ore_repository_js_1.findOreByIdRepository)(idOre);
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
        const createdOre = await (0, ore_repository_js_1.createOreRepository)(oreData);
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
        const updatedOre = await (0, ore_repository_js_1.updateOreRepository)(idOre, oreData);
        if (!updatedOre) {
            throw new Error('Minério não encontrado!');
        }
        const updatedOreDocument = await (0, ore_repository_js_1.findOreByIdRepository)(idOre);
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
        const deletedOre = await (0, ore_repository_js_1.deleteOreRepository)(idOre);
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

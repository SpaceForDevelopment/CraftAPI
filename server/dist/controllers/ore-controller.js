"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOreController = exports.updateOreController = exports.createOreController = exports.findOreByIdController = exports.findAllOresController = void 0;
const oreValidations_service_js_1 = require("../services/ores/oreValidations-service.js");
const ore_service_js_1 = require("../services/ores/ore-service.js");
const findAllOresController = async (req, res) => {
    try {
        const ores = await (0, ore_service_js_1.findAllOresService)();
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
            throw new Error('O "id" não foi fornecido na consulta.');
        }
        const ore = await (0, ore_service_js_1.findOreByIdService)(idOre);
        res.status(200).json({
            Ore: ore
        });
    }
    catch (error) {
        if (error instanceof Error && error.message.includes('Cast to ObjectId failed')) {
            res.status(400).json({
                message: 'O "id" fornecido não é válido para exibição do minério.',
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
        const createdOre = await (0, ore_service_js_1.createOreService)(oreData);
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
            throw new Error('O parâmetro "id" não foi fornecido na consulta.');
        }
        (0, oreValidations_service_js_1.validateOreData)(oreData);
        const updatedOre = await (0, ore_service_js_1.updateOreService)(idOre, oreData);
        res.status(200).json({
            message: 'Dados atualizados com sucesso.',
            Ore: updatedOre,
        });
    }
    catch (error) {
        if (error instanceof Error && error.message.includes('Cast to ObjectId failed')) {
            res.status(400).json({
                message: 'O "id" fornecido não é válido para atualização do minério.',
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
            throw new Error('O parâmetro "id" não foi fornecido na consulta.');
        }
        await (0, ore_service_js_1.deleteOreService)(idOre);
        res.status(200).json({
            message: 'Exclusão feita com sucesso!'
        });
    }
    catch (error) {
        if (error instanceof Error && error.message.includes('Cast to ObjectId failed')) {
            res.status(400).json({
                message: 'O "id" fornecido não é válido para exclusão do minério.',
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

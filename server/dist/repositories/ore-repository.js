"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOreRepository = exports.updateOreRepository = exports.createOreRepository = exports.findOreByIdRepository = exports.findAllOresRepository = void 0;
const ore_js_1 = __importDefault(require("../models/ore.js"));
const findAllOresRepository = () => ore_js_1.default.find();
exports.findAllOresRepository = findAllOresRepository;
const findOreByIdRepository = (idOre) => ore_js_1.default.findById(idOre);
exports.findOreByIdRepository = findOreByIdRepository;
const createOreRepository = ({ name, type, availability, description, minimumPickaxe, explosionResistance, image, }) => ore_js_1.default.create({
    name,
    type,
    availability,
    description,
    minimumPickaxe,
    explosionResistance,
    image,
});
exports.createOreRepository = createOreRepository;
const updateOreRepository = async (id, oreData) => {
    const updatedOre = await ore_js_1.default.findOneAndUpdate({ _id: id }, { ...oreData }, { rawResult: true });
    return updatedOre;
};
exports.updateOreRepository = updateOreRepository;
const deleteOreRepository = (id) => ore_js_1.default.findOneAndDelete({ _id: id }, { rawResult: true });
exports.deleteOreRepository = deleteOreRepository;

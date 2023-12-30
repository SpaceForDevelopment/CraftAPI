"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEquipmentRepository = exports.updateEquipmentRepository = exports.createEquipmentRepository = exports.findEquipmentByIdRepository = exports.findAllEquipmentRepository = void 0;
const equipment_js_1 = __importDefault(require("../models/equipment.js"));
const findAllEquipmentRepository = () => equipment_js_1.default.find();
exports.findAllEquipmentRepository = findAllEquipmentRepository;
const findEquipmentByIdRepository = (idEquipment) => equipment_js_1.default.findById(idEquipment);
exports.findEquipmentByIdRepository = findEquipmentByIdRepository;
const createEquipmentRepository = ({ name, type, role, materials, durability, rarity, renewable, image, }) => equipment_js_1.default.create({
    name,
    type,
    role,
    materials,
    durability,
    rarity,
    renewable,
    image,
});
exports.createEquipmentRepository = createEquipmentRepository;
const updateEquipmentRepository = async (id, equipmentData) => {
    const updatedEquipment = await equipment_js_1.default.findOneAndUpdate({ _id: id }, { ...equipmentData }, { rawResult: true });
    return updatedEquipment;
};
exports.updateEquipmentRepository = updateEquipmentRepository;
const deleteEquipmentRepository = (id) => equipment_js_1.default.findOneAndDelete({ _id: id }, { rawResult: true });
exports.deleteEquipmentRepository = deleteEquipmentRepository;

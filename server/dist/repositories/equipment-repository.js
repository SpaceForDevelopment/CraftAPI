"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEquipmentRepository = exports.updateEquipmentRepository = exports.createEquipmentRepository = exports.findEquipmentByIdRepository = exports.findAllEquipmentRepository = void 0;
const equipment_js_1 = require("../models/equipment.js");
const findAllEquipmentRepository = () => equipment_js_1.Equipment.find();
exports.findAllEquipmentRepository = findAllEquipmentRepository;
const findEquipmentByIdRepository = (idEquipment) => equipment_js_1.Equipment.findById(idEquipment);
exports.findEquipmentByIdRepository = findEquipmentByIdRepository;
const createEquipmentRepository = ({ name, type, role, materials, durability, rarity, renewable, image, }) => equipment_js_1.Equipment.create({
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
    const updatedEquipment = await equipment_js_1.Equipment.findOneAndUpdate({ _id: id }, { ...equipmentData }, { rawResult: true });
    return updatedEquipment;
};
exports.updateEquipmentRepository = updateEquipmentRepository;
const deleteEquipmentRepository = (id) => equipment_js_1.Equipment.findOneAndDelete({ _id: id }, { rawResult: true });
exports.deleteEquipmentRepository = deleteEquipmentRepository;

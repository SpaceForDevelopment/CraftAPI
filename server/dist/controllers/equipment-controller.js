"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEquipment = void 0;
const equipment_factory_js_1 = require("../services/equipment-factory.js");
const remove_prefix_keys_js_1 = require("../utils/remove-prefix-keys.js");
const getEquipment = (req, res) => {
    const equipmentFactory = new equipment_factory_js_1.EquipmentFactory('./data/equipment.csv');
    const equipmentData = equipmentFactory.getEquipment();
    const idQueryParam = req.query.id;
    if (idQueryParam && typeof idQueryParam === 'string') {
        const equipmentId = parseInt(idQueryParam);
        const selectedEquipment = equipmentData.find(equipment => equipment.id === equipmentId);
        if (selectedEquipment) {
            const equipmentData = (0, remove_prefix_keys_js_1.removePrefixFromKeys)(selectedEquipment);
            res.status(200).json(equipmentData);
            return;
        }
    }
    const renamedEquipmentData = equipmentData.map((equipment) => (0, remove_prefix_keys_js_1.removePrefixFromKeys)(equipment));
    res.status(200).json(renamedEquipmentData);
};
exports.getEquipment = getEquipment;

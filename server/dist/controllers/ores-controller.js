"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOres = void 0;
const ores_factory_js_1 = require("../services/ores-factory.js");
const remove_prefix_keys_js_1 = require("../utils/remove-prefix-keys.js");
const getOres = (req, res) => {
    const oreFactory = new ores_factory_js_1.OreFactory('./data/ores.csv');
    const oresData = oreFactory.getOres();
    const idQueryParam = req.query.id;
    if (idQueryParam && typeof idQueryParam === 'string') {
        const oreId = parseInt(idQueryParam);
        const selectedOre = oresData.find(ore => ore.id === oreId);
        if (selectedOre) {
            const oreData = (0, remove_prefix_keys_js_1.removePrefixFromKeys)(selectedOre);
            res.status(200).json(oreData);
            return;
        }
    }
    const renamedOresData = oresData.map((ore) => (0, remove_prefix_keys_js_1.removePrefixFromKeys)(ore));
    res.status(200).json(renamedOresData);
};
exports.getOres = getOres;

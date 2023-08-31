"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMobs = void 0;
const mob_factory_js_1 = require("../services/mob-factory.js");
const remove_prefix_keys_js_1 = require("../utils/remove-prefix-keys.js");
const getMobs = (req, res) => {
    const mobFactory = new mob_factory_js_1.MobFactory('./data/mobs.csv');
    const mobsData = mobFactory.getMobs();
    const idQueryParam = req.query.id;
    if (idQueryParam && typeof idQueryParam === 'string') {
        const mobId = parseInt(idQueryParam);
        const selectedMob = mobsData.find(mob => mob.id === mobId);
        if (selectedMob) {
            const mobData = (0, remove_prefix_keys_js_1.removePrefixFromKeys)(selectedMob);
            res.status(200).json(mobData);
            return;
        }
    }
    const renamedMobsData = mobsData.map((mob) => (0, remove_prefix_keys_js_1.removePrefixFromKeys)(mob));
    res.status(200).json(renamedMobsData);
};
exports.getMobs = getMobs;

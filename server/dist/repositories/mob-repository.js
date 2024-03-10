"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMobRepository = exports.updateMobRepository = exports.createMobRepository = exports.findMobByIdRepository = exports.findAllMobsRepository = void 0;
const mob_js_1 = require("../models/mob.js");
const findAllMobsRepository = () => mob_js_1.Mob.find();
exports.findAllMobsRepository = findAllMobsRepository;
const findMobByIdRepository = (idMob) => mob_js_1.Mob.findById(idMob);
exports.findMobByIdRepository = findMobByIdRepository;
const createMobRepository = ({ name, type, role, hitPoints, javaEdition, bedrockEdition, educationEdition, image, }) => mob_js_1.Mob.create({
    name,
    type,
    role,
    hitPoints,
    javaEdition,
    bedrockEdition,
    educationEdition,
    image,
});
exports.createMobRepository = createMobRepository;
const updateMobRepository = async (id, mobData) => {
    const updatedMob = await mob_js_1.Mob.findOneAndUpdate({ _id: id }, { ...mobData }, { rawResult: true });
    return updatedMob;
};
exports.updateMobRepository = updateMobRepository;
const deleteMobRepository = (id) => mob_js_1.Mob.findOneAndDelete({ _id: id }, { rawResult: true });
exports.deleteMobRepository = deleteMobRepository;

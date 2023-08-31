"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mob_factory_js_1 = __importDefault(require("./services/mob-factory.js"));
const PORT = process.env.PORT || 3333;
const app = (0, express_1.default)();
let mobsData = [];
try {
    mobsData = new mob_factory_js_1.default('./data/mobs.csv').mobs;
}
catch (error) {
    console.error('Error loading mobs data:', error);
    mobsData = [];
}
function renameKeysWithPrefixRemoval(obj) {
    const renamedObj = {};
    for (const key in obj) {
        if (key.startsWith('_')) {
            const newKey = key.substr(1);
            renamedObj[newKey] = obj[key];
        }
        else {
            renamedObj[key] = obj[key];
        }
    }
    return renamedObj;
}
const renamedMobsData = mobsData.map((mob) => renameKeysWithPrefixRemoval(mob));
app.get('/', (req, res) => {
    const duo = 'Artur Bomtempo e Letícia França';
    const idClass = '3D1';
    const subject = 'Framework';
    const school = 'Colégio Cotemig';
    res.status(200).json({
        duo: duo,
        class: idClass,
        subject: subject,
        school: school
    });
});
app.get('/mobs', (req, res) => {
    res.status(200).json(renamedMobsData);
});
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

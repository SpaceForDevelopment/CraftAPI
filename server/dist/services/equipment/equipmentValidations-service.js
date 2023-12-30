"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEquipmentData = void 0;
const validateEquipmentData = (equipmentData) => {
    if (!equipmentData.name) {
        throw new Error('Favor preencher corretamente o nome do equipamento!');
    }
    else if (typeof equipmentData.name !== 'string') {
        throw new Error('O nome do equipamento deve ser uma string válida!');
    }
    else if (equipmentData.name.trim() === '') {
        throw new Error('O nome do equipamento não pode ser um campo vazio!');
    }
    if (!equipmentData.type) {
        throw new Error('Favor preencher corretamente o tipo do equipamento!');
    }
    else if (typeof equipmentData.type !== 'string') {
        throw new Error('O tipo do equipamento deve ser uma string válida!');
    }
    else if (equipmentData.type.trim() === '') {
        throw new Error('O tipo do equipamento não pode ser um campo vazio!');
    }
    if (!equipmentData.role) {
        throw new Error('Favor preencher corretamente a função do equipamento!');
    }
    else if (typeof equipmentData.role !== 'string') {
        throw new Error('A função do equipamento deve ser uma string válida!');
    }
    else if (equipmentData.role.trim() === '') {
        throw new Error('A função do equipamento não pode ser um campo vazio!');
    }
    if (!equipmentData.materials) {
        throw new Error('Favor preencher corretamente os materiais para construção do equipamento!');
    }
    else if (typeof equipmentData.materials !== 'string') {
        throw new Error('Os materiais para construção do equipamento deve ser uma string válida!');
    }
    else if (equipmentData.materials.trim() === '') {
        throw new Error('Os materiais para construção do equipamento não pode ser um campo vazio!');
    }
    if (!equipmentData.durability) {
        throw new Error('Favor preencher corretamente a durabilidade do equipamento!');
    }
    else if (typeof equipmentData.durability !== 'string') {
        throw new Error('A durabilidade do equipamento deve ser uma string válida!');
    }
    else if (equipmentData.durability.trim() === '') {
        throw new Error('A durabilidade do equipamento não pode ser um campo vazio!');
    }
    if (!equipmentData.rarity) {
        throw new Error('Favor preencher corretamente a raridade do equipamento!');
    }
    else if (typeof equipmentData.rarity !== 'string') {
        throw new Error('A raridade do equipamento deve ser uma string válida!');
    }
    else if (equipmentData.rarity.trim() === '') {
        throw new Error('A raridade do equipamento não pode ser um campo vazio!');
    }
    if (!equipmentData.renewable) {
        throw new Error('Favor preencher corretamente se o equipamento é renovável!');
    }
    else if (typeof equipmentData.renewable !== 'string') {
        throw new Error('O campo "renewable" deve ser uma string válida!');
    }
    else if (equipmentData.renewable.trim() === '') {
        throw new Error('"Renewable" não pode ser um campo vazio!');
    }
    const imageLinkRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
    if (!equipmentData.image) {
        throw new Error('Favor preencher corretamente o link da imagem do equipamento!');
    }
    else if (typeof equipmentData.image !== 'string') {
        throw new Error('O link da imagem do equipamento deve ser uma string válida!');
    }
    else if (equipmentData.image.trim() === '') {
        throw new Error('O link da imagem do equipamento não pode ser um campo vazio!');
    }
    else if (!imageLinkRegex.test(equipmentData.image)) {
        throw new Error('O link da imagem do equipamento não é válido!');
    }
};
exports.validateEquipmentData = validateEquipmentData;

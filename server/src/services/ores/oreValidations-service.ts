import { OreInterface } from '../../interfaces/ore-interface.js';

export const validateOreData = (oreData: OreInterface) => {
    if (!oreData.name) {
        throw new Error('Favor preencher corretamente o nome do minério!');
    } else if (typeof oreData.name !== 'string') {
        throw new Error('O nome do minério deve ser uma string válida!');
    } else if (oreData.name.trim() === '') {
        throw new Error('O nome do minério não pode ser um campo vazio!');
    }

    if (!oreData.type) {
        throw new Error('Favor preencher corretamente o tipo do minério!');
    } else if (typeof oreData.type !== 'string') {
        throw new Error('O tipo do minério deve ser uma string válida!');
    } else if (oreData.type.trim() === '') {
        throw new Error('O tipo do minério não pode ser um campo vazio!');
    }

    if (!oreData.availability) {
        throw new Error(
            'Favor preencher corretamente onde o minério está disponível!'
        );
    } else if (typeof oreData.availability !== 'string') {
        throw new Error(
            'O local onde o minério está disponível deve ser uma string válida!'
        );
    } else if (oreData.availability.trim() === '') {
        throw new Error(
            'O local onde o minério está disponível não pode ser um campo vazio!'
        );
    }

    if (!oreData.description) {
        throw new Error('Favor preencher corretamente a descrição do minério!');
    } else if (typeof oreData.description !== 'string') {
        throw new Error('A descrição do minério deve ser uma string válida!');
    } else if (oreData.description.trim() === '') {
        throw new Error('A descrição do minério não pode ser um campo vazio!');
    }

    if (!oreData.minimumPickaxe) {
        throw new Error(
            'Favor preencher corretamente o tipo de picareta mínima para quebrar o minério!'
        );
    } else if (typeof oreData.minimumPickaxe !== 'string') {
        throw new Error(
            'O tipo de picareta mínima para quebrar o minério deve ser uma string válida!'
        );
    } else if (oreData.minimumPickaxe.trim() === '') {
        throw new Error(
            'O tipo de picareta mínima para quebrar o minério não pode ser um campo vazio!'
        );
    }

    if (!oreData.explosionResistance) {
        throw new Error(
            'Favor preencher corretamente a resistência à explosão do minério!'
        );
    } else if (typeof oreData.explosionResistance !== 'string') {
        throw new Error(
            'A resistência à explosão do minério deve ser uma string válida!'
        );
    } else if (oreData.explosionResistance.trim() === '') {
        throw new Error(
            'A resistência à explosão do minério não pode ser um campo vazio!'
        );
    }

    const imageLinkRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;

    if (!oreData.image) {
        throw new Error(
            'Favor preencher corretamente o link da imagem do minério!'
        );
    } else if (typeof oreData.image !== 'string') {
        throw new Error(
            'O link da imagem do minério deve ser uma string válida!'
        );
    } else if (oreData.image.trim() === '') {
        throw new Error(
            'O link da imagem do minério não pode ser um campo vazio!'
        );
    } else if (!imageLinkRegex.test(oreData.image)) {
        throw new Error('O link da imagem do minério não é válido!');
    }
};

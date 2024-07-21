import { MobInterface } from '../../interfaces/mob-interface.js';

export const validateMobData = (mobData: MobInterface) => {
    if (!mobData.name) {
        throw new Error('Favor preencher corretamente o nome do mob!');
    } else if (typeof mobData.name !== 'string') {
        throw new Error('O nome do mob deve ser uma string válida!');
    } else if (mobData.name.trim() === '') {
        throw new Error('O nome do mob não pode ser um campo vazio!');
    }

    if (!mobData.type) {
        throw new Error('Favor preencher corretamente o tipo do mob!');
    } else if (typeof mobData.type !== 'string') {
        throw new Error('O tipo do mob deve ser uma string válida!');
    } else if (mobData.type.trim() === '') {
        throw new Error('O tipo do mob não pode ser um campo vazio!');
    }

    if (!mobData.role) {
        throw new Error('Favor preencher corretamente a função do mob!');
    } else if (typeof mobData.role !== 'string') {
        throw new Error('A função do mob deve ser uma string válida!');
    } else if (mobData.role.trim() === '') {
        throw new Error('A função do mob não pode ser um campo vazio!');
    }

    if (!mobData.hitPoints) {
        throw new Error('Favor preencher corretamente os pontos de vida do mob!');
    } else if (typeof mobData.hitPoints !== 'string') {
        throw new Error('Os pontos de vida do mob deve ser uma string válida!');
    } else if (mobData.hitPoints.trim() === '') {
        throw new Error('Os pontos de vida do mob não pode ser um campo vazio!');
    }

    if (!mobData.javaEdition) {
        throw new Error('Favor preencher corretamente se o mob está disponível na versão Java!');
    } else if (typeof mobData.javaEdition !== 'string') {
        throw new Error("O campo 'javaEdition' deve ser uma string válida!");
    } else if (mobData.javaEdition.trim() === '') {
        throw new Error("'javaEdition' não pode ser um campo vazio!");
    }

    if (!mobData.bedrockEdition) {
        throw new Error('Favor preencher corretamente se o mob está disponível na versão Bedrock!');
    } else if (typeof mobData.bedrockEdition !== 'string') {
        throw new Error("O campo 'bedrockEdition' deve ser uma string válida!");
    } else if (mobData.bedrockEdition.trim() === '') {
        throw new Error("'bedrockEdition' não pode ser um campo vazio!");
    }

    if (!mobData.educationEdition) {
        throw new Error(
            'Favor preencher corretamente se o mob está disponível na versão Education!'
        );
    } else if (typeof mobData.educationEdition !== 'string') {
        throw new Error("O campo 'educationEdition' deve ser uma string válida!");
    } else if (mobData.educationEdition.trim() === '') {
        throw new Error("'educationEdition' não pode ser um campo vazio!");
    }

    const imageLinkRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;

    if (!mobData.image) {
        throw new Error('Favor preencher corretamente o link da imagem do mob!');
    } else if (typeof mobData.image !== 'string') {
        throw new Error('O link da imagem do mob deve ser uma string válida!');
    } else if (mobData.image.trim() === '') {
        throw new Error('O link da imagem do mob não pode ser um campo vazio!');
    } else if (!imageLinkRegex.test(mobData.image)) {
        throw new Error('O link da imagem do mob não é válido!');
    }
};

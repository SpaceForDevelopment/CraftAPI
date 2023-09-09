"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Ore {
    constructor(id, name, availability, description, rarity, minimumPickaxe, explosionResistance, image) {
        this._id = id;
        this._name = name;
        this._availability = availability;
        this._description = description;
        this._rarity = rarity;
        this._minimumPickaxe = minimumPickaxe;
        this._explosionResistance = explosionResistance;
        this._image = image;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get availability() {
        return this._availability;
    }
    get description() {
        return this._description;
    }
    get rarity() {
        return this._rarity;
    }
    get minimumPickaxe() {
        return this._minimumPickaxe;
    }
    get explosionResistance() {
        return this._explosionResistance;
    }
    get image() {
        return this._image;
    }
}
exports.default = Ore;

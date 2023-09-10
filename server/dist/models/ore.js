"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Ore {
    constructor(id, name, type, availability, description, minimumPickaxe, explosionResistance, image) {
        this._id = id;
        this._name = name;
        this._type = type;
        this._availability = availability;
        this._description = description;
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
    get type() {
        return this._type;
    }
    get availability() {
        return this._availability;
    }
    get description() {
        return this._description;
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

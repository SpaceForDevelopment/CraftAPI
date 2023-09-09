"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Equipment {
    constructor(id, name, type, role, materials, durability, rarity, renewable, image) {
        this._id = id;
        this._name = name;
        this._type = type;
        this._role = role;
        this._materials = materials;
        this._durability = durability;
        this._rarity = rarity;
        this._renewable = renewable;
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
    get role() {
        return this._role;
    }
    get materials() {
        return this._materials;
    }
    get durability() {
        return this._durability;
    }
    get rarity() {
        return this._rarity;
    }
    get renewable() {
        return this._renewable;
    }
    get image() {
        return this._image;
    }
}
exports.default = Equipment;

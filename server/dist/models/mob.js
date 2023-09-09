"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Mob {
    constructor(id, name, type, role, hitPoints, javaEdition, bedrockEdition, educationEdition, image) {
        this._id = id;
        this._name = name;
        this._type = type;
        this._role = role;
        this._hitPoints = hitPoints;
        this._javaEdition = javaEdition;
        this._bedrockEdition = bedrockEdition;
        this._educationEdition = educationEdition;
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
    get hitPoints() {
        return this._hitPoints;
    }
    get javaEdition() {
        return this._javaEdition;
    }
    get bedrockEdition() {
        return this._bedrockEdition;
    }
    get educationEdition() {
        return this._educationEdition;
    }
    get image() {
        return this._image;
    }
}
exports.default = Mob;

export default class Mob {
    private _id: number;
    private _name: string;
    private _type: string;
    private _role: string;
    private _hitPoints: string;
    private _javaEdition: string;
    private _bedrockEdition: string;
    private _educationEdition: string;
    private _image: string;

    constructor(id: number, name: string, type: string, role: string, hitPoints: string, javaEdition: string, bedrockEdition: string, educationEdition: string, image: string) {
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

    get hitPoints() {
        return this._hitPoints;
    }

    get role() {
        return this._role;
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
export default class Equipment {
    private _id: number;
    private _name: string;
    private _type: string;
    private _role: string;
    private _materials: string;
    private _durability: string;
    private _rarity: string;
    private _renewable: string;
    private _image: string;

    constructor(id: number, name: string, type: string, role: string, materials: string, durability: string, rarity: string, renewable: string, image: string) {
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
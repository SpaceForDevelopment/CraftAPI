export default class Ore {
    private _id: number;
    private _name: string;
    private _type: string;
    private _availability: string;
    private _description: string;
    private _minimumPickaxe: string;
    private _explosionResistance: string;
    private _image: string;

    constructor(id: number, name: string, type: string, availability: string, description: string, minimumPickaxe: string, explosionResistance: string, image: string) {
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
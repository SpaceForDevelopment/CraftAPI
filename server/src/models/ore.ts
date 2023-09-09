export default class Ore {
    private _id: number;
    private _name: string;
    private _availability: string;
    private _description: string;
    private _rarity: string;
    private _minimumPickaxe: string;
    private _explosionResistance: string;
    private _image: string;

    constructor(id: number, name: string, availability: string, description: string, rarity: string, minimumPickaxe: string, explosionResistance: string, image: string) {
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
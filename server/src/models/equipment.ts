import mongoose from 'mongoose';

const EquipmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    materials: {
        type: String,
        required: true,
    },
    durability: {
        type: String,
        required: true,
    },
    rarity: {
        type: String,
        required: true,
    },
    renewable: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
});

const Equipment = mongoose.model('Equipment', EquipmentSchema);

export default Equipment;
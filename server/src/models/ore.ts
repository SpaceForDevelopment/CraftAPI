import mongoose from 'mongoose';

const OreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    availability: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    minimumPickaxe: {
        type: String,
        required: true,
    },
    explosionResistance: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
});

export const Ore = mongoose.model('Ore', OreSchema);

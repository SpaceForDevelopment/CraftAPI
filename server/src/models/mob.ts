import mongoose from 'mongoose';

const MobSchema = new mongoose.Schema({
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
    hitPoints: {
        type: String,
        required: true,
    },
    javaEdition: {
        type: String,
        required: true,
    },
    bedrockEdition: {
        type: String,
        required: true,
    },
    educationEdition: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
});

export const Mob = mongoose.model('Mob', MobSchema);
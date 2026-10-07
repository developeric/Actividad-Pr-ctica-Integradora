import { Schema, model } from 'mongoose';
const libroSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: {
        type: String,
        enum: ['DISPONIBLE', 'PRESTADO', 'EN_REPARACION'],
        default: 'DISPONIBLE',
        required: true,
    },
}, {
    timestamps: true, // Genera automáticamente createdAt y updatedAt
});
export const BookModel = model('Book', libroSchema);

import { Schema, model, Document } from 'mongoose';

export type BookStatus = 'DISPONIBLE' | 'PRESTADO' | 'EN_REPARACION';

export interface IBook extends Document {
  title: string;
  description: string;
  status: BookStatus;
  createdAt: Date;
  updatedAt: Date;
}

const libroSchema = new Schema<IBook>(
{
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: {
      type: String,
      enum: ['DISPONIBLE', 'PRESTADO', 'EN_REPARACION'],
      default: 'DISPONIBLE',
      required: true,
    },
  },
  {
    timestamps: true, // Genera automáticamente createdAt y updatedAt
  }
);
export const BookModel = model<IBook>('Book', libroSchema);
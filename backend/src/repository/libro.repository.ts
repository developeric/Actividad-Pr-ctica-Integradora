import { IBook } from "../models/libro.model.js";

// Definimos la interfaz con los métodos que usaremos
export interface BookRepository {
  // Usamos Partial para indicar que no siempre se enviarán todos los datos del contrato
  create(bookData: Partial<IBook>): Promise<IBook>;
  findAll(): Promise<IBook[]>;
  findById(id: string): Promise<IBook | null>;
  update(id: string, updateData: Partial<IBook>): Promise<IBook | null>;
  delete(id: string): Promise<boolean>;
}
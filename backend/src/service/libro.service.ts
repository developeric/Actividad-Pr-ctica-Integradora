import { IBook } from '../models/libro.model.js';
import { BookRepository } from '../repository/libro.repository.js';


export class BookService {
  // Aplicamos DIP (Inversión de Dependencias): el servicio depende de la abstracción, no de la implementación concreta de MongoDB
    constructor(
        private readonly bookRepository: BookRepository
    ) {

    }

  // 1. Crear libro
  public async createBook(data: Partial<IBook>): Promise<IBook> {
    const newBookData = {
      ...data,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    return await this.bookRepository.create(newBookData);
  }


    // Delegamos la persistencia al repositorio
  // 2. Obtener todos los libros
  public async getAllBooks(): Promise<IBook[]> {
    return await this.bookRepository.findAll();
  }

  // 3. Buscar libro por ID
  public async getBookById(id: string): Promise<IBook | null> {
    return await this.bookRepository.findById(id);
  }

  // 4. Actualizar libro
  public async updateBook(id: string, updateData: Partial<IBook>): Promise<IBook> {
    // Revisamos el estado actual usando el mismo método de la clase
    const currentBook = await this.getBookById(id);

    if (!currentBook) {
      throw new Error(`El libro con el id ${id} no existe`);
    }
    const previousStatus = currentBook.status;
    const updatedBook = await this.bookRepository.update(id, updateData);

    if (!updatedBook) {
      throw new Error(`Error al actualizar el libro con id: ${id}`);
      }
      if (updateData.status && updateData.status !== previousStatus) {
    // Esto notificará automáticamente a todos los usuarios suscritos a este libro
    await this.eventPublisher.notify({
      resourceId: id,
      resourceType: 'Book',
      title: updatedBook.title,
      oldStatus: previousStatus,
      newStatus: updatedBook.status,
    });
  }

    return updatedBook;
  }

  // 5. Eliminar libro
  public async deleteBook(id: string): Promise<boolean> {
    const isDeleted = await this.bookRepository.delete(id);

    if (!isDeleted) {
      throw new Error(`No existe un libro con el id: ${id}`);
    }
    
    return isDeleted;
  }
}
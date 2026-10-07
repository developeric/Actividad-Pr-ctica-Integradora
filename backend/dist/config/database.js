import mongoose from "mongoose";
export class Database {
    URI;
    constructor() {
        this.URI = process.env.MONGO_URI ?? 'mongodb://localhost:27017/biblioteca_db';
    }
    async connect() {
        try {
            await mongoose.connect(this.URI);
            console.log('Conectado a MongoDB con éxito');
        }
        catch (error) {
            console.error('Error al conectar a MongoDB:', error);
            process.exit(1);
        }
    }
}

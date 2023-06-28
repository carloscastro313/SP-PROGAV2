import mongoose from "mongoose";

const Mascota = new mongoose.Schema({
    nombre: {
        type: String,
        require: true,
    },
    edad: {
        type: Number,
        require: true
    },
    tipo: {
        type: String,
        require: true
    },
    vacunado: {
        type: Boolean,
        require: false,
    },
    observaciones: {
        type: String,
        require: false
    }    
});

export default mongoose.model("Mascotas",Mascota);
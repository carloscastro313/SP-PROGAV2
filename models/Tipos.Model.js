import mongoose from "mongoose";

const Tipo = new mongoose.Schema({
    descripcion: {
        type: String,
        require: true,
    },
});

export default mongoose.model("Tipos",Tipo);
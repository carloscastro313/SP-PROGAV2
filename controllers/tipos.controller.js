import Tipos from "../models/Tipos.Model.js";

export async function CrearTipo(req, res, next){
    try {
        const model = new Tipos(req.body);
    
        await model.save();

        return res.json({
            ok: true,
        });
    } catch (error) {
        next(error);
    }
}



export async function GetTipos(req, res, next){
    try {
        const tipos = await Tipos.find();

        return res.json({
            ok: true,
            tipos
        });
    } catch (error) {
        next(error);
    }
}
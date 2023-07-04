import Mascota from "../models/mascotas.model.js";

export async function CrearMascota(req, res, next) {
    try {
        const model = new Mascota(req.body);
            
        await model.save();

        return res.json({
            ok: true,
        });
    } catch (error) {
        next(error);
    }
}


export async function ObtenerMascotas(req, res, next) {
    try {
        const mascotas = await Mascota.find();

        return res.json({
            ok: true,
            mascotas
        });
    } catch (error) {
        next(error);
    }
}

export async function ObtenerMascota(req, res, next) {
    try {
        console.log(req.params)
        const { id } = req.params;
        const mascota = await Mascota.findById(id);

        return res.json({
            ok: true,
            mascota
        });
    } catch (error) {
        next(error);
    }
}

export async function ActualizarMascota(req, res, next) {
    try {
        const modificada = req.body;
        const { id } = req.params;

        const mascota = await Mascota.findByIdAndUpdate(
            id,
            modificada,
            { new: true }
          );

        if(!mascota)
            return next({
                name: "Validation error",
                message: "No existe la mascota",
            });

        return res.json({
            ok: true
        });
    } catch (error) {
        next(error);
    }
}


export async function EliminarMascota(req, res, next) {
    try {
        const { id } = req.params;

        const mascota = await Mascota.findByIdAndRemove(
            id,
            { new: true }
          );

        if(!mascota)
            return next({
                ok: false,
                msg: "No existe la mascota",
            });
            
        return res.json({
            ok: true
        });
    } catch (error) {
        next(error);
    }
}

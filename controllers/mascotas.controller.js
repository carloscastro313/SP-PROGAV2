import Mascota from "../models/mascotas.model.js";

export async function CrearMascota(req, res) {
    try {
        const model = new Mascota(req.body);

        const isValid = await model.validate();
        console.log(isValid);
        // if(!isValid)
        //     return res.status(400).json({
        //         ok: false,
        //         msg: "Hay campos incorrectos",
        //     });
            
        await model.save();

        return res.json({
            ok: true,
        });
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            ok: false,
            msg: "Error inesperado",
        });
    }
}


export async function ObtenerMascotas(req, res) {
    try {
        const mascotas = await Mascota.find();

        return res.json({
            ok: true,
            mascotas
        });
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            ok: false,
            msg: "Error inesperado",
        });
    }
}

export async function ObtenerMascota(req, res) {
    try {
        const { id } = req.params;
        const mascota = await Mascota.findById(id);

        return res.json({
            ok: true,
            mascota
        });
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            ok: false,
            msg: "Error inesperado",
        });
    }
}

export async function ActualizarMascota(req, res) {
    try {
        const modificada = req.body;
        const { id } = req.params;

        const mascota = await Mascota.findByIdAndUpdate(
            id,
            modificada,
            { new: true }
          );

        if(!mascota)
            return res.status(400).json({
                ok: false,
                msg: "No existe la mascota",
            });

        return res.json({
            ok: true
        });
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            ok: false,
            msg: "Error inesperado",
        });
    }
}


export async function EliminarMascota(req, res) {
    try {
        const { id } = req.params;

        const mascota = await Mascota.findByIdAndRemove(
            id,
            { new: true }
          );

        if(!mascota)
            return res.status(400).json({
                ok: false,
                msg: "No existe la mascota",
            });
            
        return res.json({
            ok: true
        });
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            ok: false,
            msg: "Error inesperado",
        });
    }
}

export async function GetTipos(req,res){
    return res.json([
        {
          "id": 1,
          "descripcion": "Perro"
        },
        {
          "id": 2,
          "descripcion": "Gato"
        },
        {
          "id": 3,
          "descripcion": "Reptil"
        },
        {
          "id": 4,
          "descripcion": "Pez"
        },
        {
          "id": 5,
          "descripcion": "Roedor"
        }
      ]);
}
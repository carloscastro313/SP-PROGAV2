export function ValidateForm(req,res,next) {
    const {nombre, edad, tipo} = req.body;

    if(!nombre || !edad || !tipo)
        return res.status(400).json({
            ok: false,
            msg: "Los campos nombre, edad y tipo son obligatorios"
        });

    next();
}
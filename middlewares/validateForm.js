export function ValidateForm(req,res,next) {
    const {nombre, edad, tipo} = req.body;

    if(!nombre || !edad || !tipo)
        return next({name: "ValidactionError", message: "Los campos nombre, edad y tipo son obligatorios."})

    next();
}

export function ValidateTipoForm(req, res, next){
    const { descripcion } = req.body;

    if(!descripcion)
        return next({name: "ValidactionError", message: "Todos los campos son obligatorios"});

    next();
}

export function ValidateUser(req, res, next) {
    const { name, password } = req.body;

    if(!password || !name)
        return next({name: "ValidactionError", message: "Todos los campos son obligatorios"});

    next();
}
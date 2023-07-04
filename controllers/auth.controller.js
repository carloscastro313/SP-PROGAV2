import User from "../models/User.Model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

export async function login(req, res, next) {
    try {
        const { name, password } = req.body;
        const user = await User.findOne({name});

        if(!user)
            return next({ name: "ValidactionError", message: "No existe usuario" });

        if(!bcrypt.compareSync(password,user.password))
            return next({ name: "ValidactionError", message: "Contraseña incorrecta" });
        
        const token = await jwt.sign({name: user.name, password: user.password}, process.env.SECRETO,{expiresIn:Math.floor(Date.now() / 1000) + 60 * 60});

        return res.json({
            ok: true,
            token,
            name: user.name
        });
    } catch (error) {
        next(error)
    }
}


export async function ObtenerUsuario(req, res, next) {
    try {
        console.log(req.toString());
        const bearerToken = req.header("authorization");
        const headerToken = bearerToken.split(" ")[1];
        const decode = jwt.verify(headerToken,process.env.SECRETO);
        const {name, password } = decode;
        const user = await User.findOne({name});


        if(!user)
            return next({ name: "ValidactionError", message: "No existe usuario" });
        
        const token = await jwt.sign({name: user.name, password: user.password}, process.env.SECRETO,{expiresIn:Math.floor(Date.now() / 1000) + 60 * 60});

        return res.json({
            ok: true,
            token,
            name: user.name
        });
    } catch (error) {
        next(error)
    }
}
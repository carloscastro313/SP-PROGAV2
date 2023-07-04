import User from "../models/User.Model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function CrearUsuario(req, res, next){
    try {
        let { name, password } = req.body;
        password = await bcrypt.hash(password,10);

        const user = new User({ name, password });
        
        await user.save();

        const token = await jwt.sign({name: user.name, password: user.password}, process.env.SECRETO,{expiresIn:Math.floor(Date.now() / 1000) + 60 * 60});

        return res.json({ok: true, token});
    } catch (error) {
        next(error);
    }
}




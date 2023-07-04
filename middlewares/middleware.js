import jwt from "jsonwebtoken";

export const handlerNotFound = (req,res) =>{
    return res.status(404).json({error:"No existe ese recurso"});
};

export const handlerError = (error,req,res,next) => {
    console.log(error);
    if(error.name === "CastError"){
        res.status(400).send({ok: false,error:"Bad Id"});
    }else if(error.name === "SyntaxError"){
        res.status(400).send({ok: false,error:"Sintax Error"});
    }else if(error.name === "ReferenceError"){
        res.status(400).send({ok: false,error: error.name, message: error.message});
    }else if(error.name === "ValidationError"){
        res.status(400).send({ok: false,error: error.name, message: error.message});
    }else if(error.name === "ErrorToken"){
        res.status(401).send({ok: false,error: error.name, message: error.message});
    }else if(error.name === "JsonWebTokenError"){
        res.status(403).send({ok: false,error: error.name, message: error.message});
    }else if(error.name === "TokenExpiredError"){
        res.status(401).send({ok: false,error: error.name, message: error.message});
    }else{
        res.status(500).send({ok: false,error: error.name, message: error.message});
    }

    next(error);
};

export const verifyToken = (req,res,next)=>{
    const bearerToken = req.get("authorization");

    console.log(bearerToken);
    const token = bearerToken.split(" ")[1];
    if(token){
        try {
            const data = jwt.verify(token,process.env.SECRETO);
            console.log(data);
            next();
        } catch (error) {
            next(error);
        }
    } else {
        next({name:"ErrorToken", message:"No Token"});
    }
}
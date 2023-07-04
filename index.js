import "dotenv/config";
import express from "express";
import cors from "cors";
import { configDB } from "./db/config.js";
import routerMascotas from "./routes/mascotas.route.js";
import morgan from "morgan";
import { handlerError, handlerNotFound } from "./middlewares/middleware.js";
import routerTipos from "./routes/tipos.route.js";
import routerUser from "./routes/user.route.js";
import routerAuth from "./routes/auth.route.js";

async function main(){
    const app = express();
    const port = process.env.PORT || 4000;

    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    app.use(cors());
    app.use(morgan('tiny'));
    
    await configDB();
    
    app.use("/api/mascotas",routerMascotas);
    app.use("/api/tipos",routerTipos);
    app.use("/api/user",routerUser);
    app.use("/api/auth",routerAuth);

    
    app.use(handlerNotFound);
    app.use(handlerError);

    app.listen(port,() => {
        console.log(`Api iniciada - http://localhost:${port}`)
    });
}

main();
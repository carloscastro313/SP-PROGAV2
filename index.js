import "dotenv/config";
import express from "express";
import cors from "cors";
import { configDB } from "./db/config.js";
import router from "./routes/mascotas.route.js";

async function main(){
    const app = express();
    const port = process.env.PORT || 4000;

    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    app.use(cors());

    await configDB();

    app.use(router)

    app.listen(port,() => {
        console.log(`Api iniciada - http://localhost:${port}`)
    });
}

main();
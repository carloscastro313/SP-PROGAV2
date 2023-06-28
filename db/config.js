import { connect } from "mongoose"

export const configDB = async () => {
    try {
        await connect(
            process.env.DB
        );
    
        console.log("Base de datos-OK!!!");
    } catch (error) {
        console.error(error);        
    }
}
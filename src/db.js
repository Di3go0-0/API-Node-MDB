import mongoos from "mongoose";  //se importa el modulo mongoose para conectarse a la base de datos

export const connectDB = async () => {          //se crea una funcion asincrona para conectarse a la base de datos
    try{
        await mongoos.connect("mongodb://127.0.0.1:27017/merndb");
        console.log(">>>>> DB is connected");
    }catch(error){
        console.log(error);
    }    
}
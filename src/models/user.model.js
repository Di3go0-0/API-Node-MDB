import mongoose from "mongoose";  //se importa el modulo mongoose para conectarse a la base de datos

const userSchema = new mongoose.Schema({        //se crea un esquema para la base de datos
    username:{                  //se crea un objeto con los campos que tendra la base de datos
        type: String,           //se especifica el tipo de dato que tendra el campo
        required: true,         //se especifica que el campo es requerido
        trim: true              //se especifica que el campo no debe tener espacios en blanco
    },
    email:{             //se crea un objeto con los campos que tendra la base de datos
        type: String,        //se especifica el tipo de dato que tendra el campo
        required: true,      //se especifica que el campo es requerido
        trim: true,          //se especifica que el campo no debe tener espacios en blanco
        unique: true        //se especifica que el campo debe ser unico
    },
    password:{
        type: String,     //se especifica el tipo de dato que tendra el campo
        required: true    //se especifica que el campo es requerido
    },  
},{
    timestamps: true        //se especifica que se guardara la fecha de creacion y modificacion de los datos
})

export default mongoose.model("User", userSchema);      //se exporta el modelo de la base de datos
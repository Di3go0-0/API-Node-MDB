import User from "../models/user.model.js";     //importamos el modelo de usuario
import bcrypt from "bcryptjs";                  //importamos bcryptjs para encriptar la contraseña
import {createAccessToken} from '../libs/jwt.js'; //importamos la funcion que hemos creado para crear el token


export const register = async (req, res) => {
    const {email, password, username} = req.body;  //Decimos que el objeto que estamos recibiendo por el body es un objeto que tiene estos campos.

    try{
        const passwordHash = await bcrypt.hash(password, 10) //Encriptamos la contraseña con bcryptjs

        const newUser = new User({
            username,
            email,
            password: passwordHash  //Guardamos la contraseña encriptada
        })
        
        const userSaved = await newUser.save(); //Guardamos el usuario en la base de datos
        const token = await createAccessToken({id: userSaved._id}); //le enviamos la id que requiere 
        
        //vamos a crear el token para el usuario
        res.cookie('token',token)    //guardamos el token en una cookie
        res.status(201).json({   //Enviamos el usuario guardado
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email,
            createdAt: userSaved.createdAt,
            updatedAt: userSaved.updatedAt
        }); //Enviamos el usuario guardado
    }catch(error){
        res.status(500).json({message: error.message}); //Si hay un error lo enviamos

    }

};

export const login = async (req, res) => {
    const {email, password} = req.body;  //pedimos el email y la contraseña

    try{

        const userFound = await User.findOne({email})
        
        if(!userFound) return res.status(400).json({message: "User not found"}) //si no existe el usuario
        
        const isMatch = await bcrypt.compare(password, userFound.password) //comparamos la contraseña que nos llega con la que tenemos en la base de datos

        if(!isMatch) return res.status(400).json({message: "Incorrect password"}) //si no coincide la contraseña
    
        const token = await createAccessToken({id: userFound._id}); //le enviamos la id que requiere para crear el token del usuario que se intenta logear
        
        //vamos a crear el token para el usuario
        res.cookie('token',token)    //guardamos el token en una cookie
        res.status(201).json({   //Enviamos el usuario guardado
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
            createdAt: userFound.createdAt,
            updatedAt: userFound.updatedAt
        }); //Enviamos el usuario guardado
    }catch(error){
        res.status(500).json({message: error.message}); //Si hay un error lo enviamos

    }
};

export const logout = (req, res) => {
    // enviamos el token vacío y con una fecha de expiración en el pasado
    res.cookie('token', '', { expires: new Date(0) });

    // enviamos una respuesta de éxito
    return res.status(200).json({ message: 'Logged out successfully' });
}

export const profile = async (req, res) =>{
    const userFound = await User.findById(req.user.id)
    if(!userFound) return res.status(400).json({message: "User not found"})

    return res.json({
        id: userFound._id,
        username: userFound.username,
        email: userFound.email,
        createdAt: userFound.createdAt,
        updatedAt: userFound.updatedAt
    })
    res.send('profile')
}
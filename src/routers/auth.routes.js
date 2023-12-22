import {Router} from 'express';  //se importa el modulo Router de express
import {login, register, logout, profile}  from '../controllers/auth.controller.js';  //se importan las funciones de los controladores
import {authRequired} from '../middlewares/valideToken.js';  //se importa el middleware para validar el token
const router = Router();    //se crea una instancia de Router

router.post('/register', register)  
router.post('/login', login)        
router.post('/logout', logout)      
router.get('/profile', authRequired, profile)       


export default router;    //se exporta el router para poder usarlo en otros archivos 
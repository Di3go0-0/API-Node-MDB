import express from "express"; //Framework para crear el servidor
import morgan from "morgan";    //Middleware para ver la peticiones que llegan al servidor
import authRoutes from "./routers/auth.routes.js";      //Rutas del servidor
import cookieParser from "cookie-parser";     //Middleware para manejar las cookies
import taskRoutes from "./routers/tasks.routes.js";     //Rutas del servidor

const app = express();        //Inicializar el servidor

app.use(morgan("dev"));     //Configurar el middleware
app.use(express.json());    //Configurar el middleware para que el servidor pueda entender los datos que llegan en formato JSON
app.use(cookieParser());    //Configurar el middleware para manejar las cookies

app.use('/api',authRoutes);        //Configurar las rutas
app.use('/api',taskRoutes);        //Configurar las rutas

export default app;     //Exportar el servidor para poder usarlo en otros archivos



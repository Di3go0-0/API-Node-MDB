import app from './app.js';
import {connectDB} from './db.js';

//import Express from 'express'
connectDB();
//const app = Express();


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`>>>>> Server is running on port ${port}`);
}
);


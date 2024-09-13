import express from 'express';

import authRoutes from "./routes/auth.route.js";
import movieRoutes from "./routes/movie.route.js"

import {ENV_VARS} from './config/envVars.js'
import { connectDB } from './config/db.js';

const app = express(); 

const PORT = ENV_VARS.PORT

app.use(express.json());
//console.log("MONGO_URI", process.env.MONGO_URI);


app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/movie", movieRoutes );


app.listen(PORT, () => {
    console.log('server started at http://localhost:' + PORT);
    connectDB();
})

//U9uoLWyY6E2FvJQj



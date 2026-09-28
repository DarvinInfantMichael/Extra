import dotenv from "dotenv"
import express from "express"
import {ConnectionDB} from "./config/db.js"
import authRoutes from "./routes/authRoutes.js"

dotenv.config();

const app = express();

ConnectionDB();

app.use("/api",authRoutes);

const PORT = process.env.PORT || 3000 ;

app.listen(PORT,()=>{
    
    console.log(`Server Rrunning Successfully at htpp://localhost${PORT}`);
    
})
import mongoose, { connect } from "mongoose";

export const ConnectionDB = async(req,res) =>{
    try {
        
        const conn = await mongoose.connect(process.env.MONGODB_URI)
        
        console.log(`Backend Connected Sucessfully at ${conn.connection.host}`); 

    } catch (error) {

        console.log("Server Error",error);

        process.exit(1);
        
    }
}
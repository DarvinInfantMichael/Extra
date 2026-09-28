import mongoose from "mongoose"

const modelSchema = new mongoose.Schema({

    UserName:String,
    UserEmail:String,
    UserPassword:String
},{timestamps:true})

const userMode = mongoose.model("UserData",modelSchema);

export default userMode;
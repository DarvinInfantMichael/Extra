import bcrypt from "bcrypt"
import userMode from "../model/authModel.js"

export const Register = async(req,res)=>{
    try {

        const{UserName,UserEmail,UserPassword}=req.body;

        if(!UserName||!UserEmail||!UserPassword){
            
            return res.status(400).json({msg:"Fields should be filled"});
            
        }

        const check = await userMode.findOne({UserEmail});

        if(check){

            return res.status(202).json({msg:"Existing Email"});
            
        }

        const hd = await bcrypt.hash(UserPassword,10);

        const newData = await userMode.create({UserName,UserEmail,UserPassword:hd});

        res.status(201).json({msg:"Register User Succesfully..."});
        
    } catch (error) {

        res.status(500).json({mag:"Server Error"});
        
    }
}

export const Login = async(req,res)=>{
try {

        const{UserEmail,UserPassword}=req.body;

        if(!UserEmail||!UserPassword){
            
            return res.status(400).json({msg:"Fields should be filled"});
            
        }

        const check = await userMode.find({UserEmail});

        if(!check){

            return res.status(202).json({msg:"Invalid Email"});
            
        }

        const comp = await bcrypt.compare(UserPassword,check.UserPassword);
        if(!comp){

            return res.status("409").json({msg:"Password not Valid"});

        }

        const newData = await userMode.create({UserName,UserEmail,UserPassword:hd});

        res.status(201).json({msg:"Register User Succesfully..."});
        
    } catch (error) {

        res.status(500).json({mag:"Server Error"});
        
    }
}
import jwt from "jsonwebtoken"

export const authMiddle = async(req,res,next)=>{
    try {

        const authHeader = req.headers.authorization;

        if(!authHeader){

            return res.status(401).json({msg:"Authorization Header is Missing"});

        }
        
        
        
        
    } catch (error) {
        
    }
}
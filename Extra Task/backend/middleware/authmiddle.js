import jwt from "jsonwebtoken"

export const authMiddle = async(req,res,next)=>{
    try {

        const authHeader = req.headers.authorization;

        if(!authHeader){

            return res.status(401).json({msg:"Authorization Header is Missing"});

        }

        const token=authHeader.split(" ")[1]

        if(!token){
            return res.status(401).json({msg:"Token Missing"})
        }

        const decode =jwt.verify(token,process.env.REFERENCE_KEY)

        req.user =decode

        next();
        
    } catch (error) {

        res.status(500).json({msg:"Server Error"});
        
    }
}
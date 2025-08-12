import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const  authenticated = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        const verification = jwt.verify(token, process.env.JWT_SECRET);
        
        if(verification) {
            req.id = verification.id;
            req.role = verification.role   
            next();
        }
        else {
            res.status(403).json({
                message: "Unauthorized access"
            })
        }
    }
catch(e) {
    res.status(500).json({
        message: "Something went wrong"
    })
}
}

export const isOwner = (req , res , next) => {
    try {
        if(req.role !== "Owner"){
            res.status(401).json({ msg : "Protected route"})
        }else{
            next();
        }
    } catch (error) {
        res.status(500).json({ msg : "something went wrong "})
    }
}

export const isAdministrator = ( req , res , next) => {
     try {
        if(req.role !== "Administrator"){
            res.status(401).json({ msg : "Protected route"})
        }else{
            next();
        }
    } catch (error) {
        res.status(500).json({ msg : "something went wrong "})
    }
}
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config({path: '../.env'});

export const generateToken = async(id , role) => {

    const token =  jwt.sign({
            id,
            role
        },
        process.env.JWT_SECRET,{
        expiresIn: '48h' 
    });

    return token;
}

export const verifyToken = async(token) => {
    return jwt.verify(token, process.env.JWT_SECRET);
}


import { hashPassword, verifyPassword } from "../utils/bcrypt.js";
import * as userServices from '../services/user.services.js'
import { generateToken } from "../utils/jwt.js";

export const signup = async(req, res) => {

    try {

        // const result =  CreateUserSchema.safeParse(req.body);
        
        
        // if(!result.success) {
        //     res.status(403).json ({
        //         msg : "Invalid date"
        //     })
        //     return;
        // }

       const { email , name , password , city , streat , state , pincode , country} = req.body
       console.log("State is " + state)

        const hashedPassword = await hashPassword(password);

        const user = await userServices.createUser(email , name , hashedPassword);

        if(!user) res.status(500).json({msg : "internal server error"});

        const address = await userServices.createAddress(city , streat , state , pincode , country , user.id);

        res.status(200).json({
            msg : "Signup Done!!!",
            user,
            address
        })


    }
    catch(e) {

        res.status(500).json ({
            message: "Error signin up!",
            error: e
        })
    }
}


export const signin = async (req , res) => {
    try {
            const email = req.body.email;
            if(!email) res.status(400).json({msg : "Invalid input"});

            const user = await userServices.getuser(email);

            if(!user) res.status(404).json({msg : "user not found"});

            const password = req.body.password;
            const verifypass = await verifyPassword( password , user.password );

            if( !verifypass ){
                res.status(401).json({
                    msg : "Password incorrect"
                })
            }

            const token = await generateToken(user.id , user.role);

            res.status(200).json({
                token : token,
                user : user
            })
    } catch (error) {
        res.status(500).json({
            msg : "internal server error"
        })
    }
}
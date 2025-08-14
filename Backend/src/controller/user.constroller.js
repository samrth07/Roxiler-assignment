import { hashPassword, verifyPassword } from "../utils/bcrypt.js";
import * as userServices from '../services/user.services.js'
import { generateToken } from "../utils/jwt.js";

export const signup = async(req, res) => {

    try {

       const { email , name , password , city , streat , state , pincode , country} = req.body
      

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


export const createAdmin = async ( req , res ) => {

    try {
        const { name , email , password , city , streat , state , pincode , country , role } = req.body;

        const hashedPassword = await hashPassword(password);

        const admin = await userServices.createAdmin(name , email , hashedPassword , role);

        if( !admin ) res.status(400).json({ msg : "Unable to form admin "});

        const address = await userServices.createAddress( city , streat , state , pincode , country  , admin.id);

        if( !address ) res.status(400).json({ msg : "something went wrong"});

        res.status(200).json({
            admin : admin,
            address : address
        });

    } catch (error) {
      
        res.status(500).json({
            error : "internal senver error"
        })
    }
}


export const getAlluser = async (req , res ) => {
    try {
        
        const users = await userServices.getAlluser();
        res.status(200).json({
            users : users
        })

    } catch (error) {
        res.status(500).json({
            error : "Internal server error"
        })
    }
}

export const getUserById = async ( req , res) => {
    try {
        const userId = (req.params.userId);
        if( !userId ) res.status(400).json({ msg : "UserId is missing "});

        const user = await userServices.getUserById( userId );
        
        if( !user ) res.status(401).json({ msg : "somthing went wrong"});

        res.status(200).json({
            user : user
        })
    } catch (error) {
        res.status(500).json({ error : "Internal server error"});
    }
}

export const changePassword = async( req , res) => {
    try {
        const userId = req.id;
        const user = await userServices.getUserById( userId );
        const { oldPassword , newPassword } = req.body;

        const verification = await verifyPassword(oldPassword , user.password);

        if( !verification ) res.status(401).json({ msg : "Incorrect password"});

        const hashedPassword = await hashPassword(newPassword)

         await userServices.updatePassord( hashedPassword , user.id);

        res.status(200).json({msg : "Password update successfully"});
        
    } catch (error) {
        
        res.status(500).json({ msg : "Internal server error"});
    }
}

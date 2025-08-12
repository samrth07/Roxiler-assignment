import { Router } from "express";
import { signup , signin, createAdmin ,getAlluser , getUserById , changePassword} from "../controller/user.constroller.js";
import { authenticated, isAdministrator } from "../middleware/auth.js";
import { validate } from "../utils/zodValidation.js";
import { CreateUserSchema, signInschema } from "../validators/validation.js";

export const userRouter = Router();

userRouter.post('/signup' , validate( CreateUserSchema ) ,signup);

userRouter.post('/signin' , validate( signInschema ) , signin);

userRouter.use(authenticated)

userRouter.post('/changePass' , changePassword);

// for sysrem Administrator

userRouter.use( isAdministrator )

userRouter.post('/' , validate( CreateUserSchema ) ,  createAdmin);

userRouter.get('/' ,  getAlluser);

userRouter.get('/:userId' ,  getUserById);


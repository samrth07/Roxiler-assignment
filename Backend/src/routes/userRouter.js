import { Router } from "express";
import { signup , signin} from "../controller/user.constroller.js";

export const userRouter = Router();

userRouter.post('/signup' , signup);

userRouter.post('/signin' , signin);

// userRouter.patch('updatepassword' , updatepassword);


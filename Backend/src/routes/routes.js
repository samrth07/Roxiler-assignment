import { Router } from "express";
import { userRouter } from "./userRouter.js"
import { ratingRouter } from "./ratingRouter.js";
import { storeRouter } from "./storeRouter.js";

export const router = Router();

router.use('/user' , userRouter);

router.use('/rating' , ratingRouter);

router.use('/store' , storeRouter);



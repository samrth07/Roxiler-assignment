import { Router } from "express";
import { authenticated, isAdministrator, isOwner } from "../middleware/auth.js";
import { giveRating , updateRating , getRatingByUserId , getRatingsBystoreId , getAllrating} from "../controller/rating.controller.js";


export const ratingRouter = Router();

ratingRouter.use( authenticated )

// user specific rating
ratingRouter.post('/:storeId' ,   giveRating);

ratingRouter.patch('/:storeId' ,   updateRating);

ratingRouter.get('/' ,  getRatingByUserId);



// for system Administrator
ratingRouter.get('/admin' ,  isAdministrator , getAllrating);

// for Store owner
// all user with rating given to store 
ratingRouter.get('/owner/:storeId' ,  isOwner , getRatingsBystoreId);







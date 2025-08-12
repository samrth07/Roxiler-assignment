import { Router } from "express";
import { authenticated, isAdministrator, isOwner } from "../middleware/auth.js";
import { createStore, getAllstore, getStoreById , getStoreByOwenrId} from "../controller/store.controller.js";
import { validate } from "../utils/zodValidation.js";
import { createStoreSchema } from "../validators/validation.js";


export const storeRouter = Router();


storeRouter.use( authenticated );

storeRouter.post('/'  , validate( createStoreSchema ),  isAdministrator ,  createStore);

// storeRouter.patch('/' , authenticated , isAdministrator , updateStore);

storeRouter.get('/owner'  , isOwner , getStoreByOwenrId);

storeRouter.get('/'  , isAdministrator , getAllstore);

storeRouter.get('/:storeId'  , isAdministrator , getStoreById);


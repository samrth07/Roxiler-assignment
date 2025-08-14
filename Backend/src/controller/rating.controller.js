import * as ratingServices from '../services/rating.services.js'

export const giveRating = async (req , res) => {
    try {   
        const userId = req.id;
        const storeId = parseInt(req.params.storeId);

        const Rating = parseInt(req.body.Rating);
        const desc = req.body.desc;

        if( !storeId || !userId) res.status(400).json({msg : "Somthing is missing"});

        const rating  = await ratingServices.giveRating( userId , storeId , Rating , desc);

        res.status(200).json({
            rating : rating
        })
        
    } catch (error) {
       
        res.status(500).json({
            msg : "Internal server error"
        })
    }
}

export const updateRating = async ( req , res ) => {
         try {   

        const ratingId = parseInt(req.params.ratingId);

        const Rating = parseInt(req.body.Rating);
        const desc = req.body.desc

        if( !ratingId) res.status(400).json({msg : "Somthing is missing"});

        const rating  = await ratingServices.updateRating( ratingId , Rating , desc);

        res.status(200).json({
            rating : rating
        })
        
    } catch (error) {
       
        res.status(500).json({
            msg : "Internal server error"
        })
    }
}

export const getRatingByUserId = async ( req , res) => {
    try {
        const userId = req.id;
        if( !userId ) res.status(400).json({ msg : "Something is missing"});
        
        const rating = await ratingServices.getRatingByUserId( userId );

        res.status(200).json({
            rating : rating
        })

    } catch (error) {
        res.status(500).json({ msg : "Internal server Error"});
    }
}

export const getRatingsBystoreId = async ( req , res) => {
    try {
        const storeId = parseInt(req.params.storeId);

        if( !storeId ) res.status(400).json({ msg : "Something is missing"});
        
        const rating = await ratingServices.getRatingsBystoreId( storeId );

        res.status(200).json({
            rating : rating
        })

    } catch (error) {
        res.status(500).json({ msg : "Internal server Error"});
    }
}

export const getAllrating = async ( req , res) => {
    try {

        const rating = await ratingServices.getAllrating( );

        res.status(200).json({
            rating : rating
        })

    } catch (error) {
        res.status(500).json({ msg : "Internal server Error"});
    }
}
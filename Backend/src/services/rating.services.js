import prisma from "../../prisma/index.js"

export const giveRating = async ( userId , storeId , Rating , desc) => {

    return await prisma.rating.create({
            data :{
                userId,
                storeId,
                Rating,
                desc
            }
    })
}

export const updateRating = async ( userId , storeId ,  data ) => {

    return await prisma.rating.update({
        where : {
            userId,
            storeId
        },
        data : data
    })

}

export const getRatingsBystoreId = async ( storeId ) => {
    return await prisma.rating.findMany({

        where : {
            storeId
        },
        include : {
            store : true,
            user : true
        }
    })
}

export const getAllrating = async (  ) => {
    return await prisma.rating.findMany({

        include : {
            user : true,
            store : true
        }
    })
}

export const getRatingByUserId = async( userId ) => {
    return await prisma.rating.findMany({
        where:{
            userId : userId
        },
        include : {
            user : true,
            store : true
        }
    })
}
import prisma from "../../prisma/index.js";

export const createStore = async (name, email, userId) => {
  return await prisma.store.create({
    data: {
      name,
      email,
      OwnerId: userId,
    },
  });
};

export const storeAddress = async (
  city,
  streat,
  State,
  pincode,
  country,
  storeId
) => {
  return await prisma.address.create({
    data: {
      city,
      streat,
      pincode,
      State,
      country,
      storeId,
    },
  });
};

export const getAllstore = async () => {
  return await prisma.store.findMany({
    include: {
      allRating: true,
      owner: {
        select : {
            name : true,
            email  :true,
            Address : true
        }
      },
      Address: true,
    },
  });
};

export const getStoreById = async (storeId) => {
  return await prisma.store.findUnique({
    where: {
      id: storeId,
    },
    include: {
      allRating: true,
      Address: true,
      owner: {
        select: {
          name: true,
          email: true,
          Address: true,
        },
      },
    },
  });
};

export const getStoreByOwenrId = async (OwnerId) => {
  return await prisma.store.findMany({
    where: {
      OwnerId: OwnerId,
    },
    include: {
      owner: {
        select : {
            name : true,
            email  :true,
            Address : true
        }
      },
      allRating: true,
      Address: true,
    },
  });
};

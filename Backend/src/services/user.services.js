import prisma from "../../prisma/index.js";

export const createUser = async (email, name, password) => {
  console.log(email);
  return await prisma.user.create({
    data: {
      email,
      name,
      password,
    },
  });
};

export const getuser = async (email) => {
  return await prisma.user.findUnique({
    where: {
      email: email,
    },
    include: {
      Address: true,
    },
  });
};

export const createAddress = async (city, streat, State, pincode, country , userId) => {
  return await prisma.address.create({
    data : {
        city,
        streat,
        pincode,
        State,
        country,
        userId
    }
  });
};

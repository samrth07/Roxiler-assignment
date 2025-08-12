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


export const getAlluser = async () =>{

  return await prisma.user.findMany({});
}

export const getUserById = async ( userId ) => {
  return await prisma.user.findUnique({
    where : {
      id : userId
    },
    select : {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true,
      updatedAt: true,
      Address: true,
      rating: true,
      store: true
    }
  })
}

export const createAdmin = async ( name, email , password , role) => {
  console.log(email);
  return await prisma.user.create({
    data: {
      email,
      name,
      password,
      role
    },
  });
};

export const updatePassord = async ( password  , userId) => {
  return await prisma.user.update({
    where : {
      id : userId
    },
    data : {
      password
    }
  })
}
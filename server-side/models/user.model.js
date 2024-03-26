import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const userModel = {
  getAllUsers: async () => {
    return await prisma.user.findMany();
  },
  getUserById: async (id) => {
    return await prisma.user.findUnique({
      where: {
        id: parseInt(id),
      },
    });
  },
  getUserbyUsername: async (username) => {
    return await prisma.user.findFirst({
      where: {
        username: username,
      },
    });
  },
  getUserByEmail: async (email) => {
    return await prisma.user.findFirst({
      where: {
        email: email,
      },
    });
  },
  signUp: async (data) => {
    return await prisma.user.create({
      data: {
        username: data.username,
        email: data.email,
        password: data.password,
      },
    });
  },
  updateUser: async (id, data) => {
    return await prisma.user.update({
      where: {
        id: parseInt(id),
      },
      data: {
        username: data.username,
        email: data.email,
        password: data.password,
      },
    });
  },
  deleteUser: async (id) => {
    return await prisma.user.delete({
      where: {
        id: parseInt(id),
      },
    });
  },
};

export default userModel;

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const vehicleModel = {
  getAllVehicles: async () => {
    return await prisma.vehicles.findMany();
  },
  getVehicleById: async (id) => {
    return await prisma.vehicles.findUnique({
      where: {
        id: parseInt(id),
      },
    });
  },
  addNewVehicle: async (data) => {
    return await prisma.vehicles.create({
      data: {
        name: data.name,
        type: data.type,
        brand: data.brand,
        cc: data.cc,
        cylinder: data.cylinder,
        price: data.price,
      },
    });
  },
  updateVehicle: async (id, data) => {
    return await prisma.vehicles.update({
      where: {
        id: parseInt(id),
      },
      data: {
        name: data.name,
        type: data.type,
        brand: data.brand,
        cc: data.cc,
        cylinder: data.cylinder,
        price: data.price,
      },
    });
  },
  deleteVehicle: async (id) => {
    return await prisma.vehicles.delete({
      where: {
        id: parseInt(id),
      },
    });
  },
};

export default vehicleModel;

import express from "express";
import vehicleController from "../controller/vehicle.controller.js";

const vehicleRouter = express.Router();

//route getAllVehicles
vehicleRouter.get("/", vehicleController.getAllVehicles);

//route getVehicleById
vehicleRouter.get("/:id", vehicleController.getVehicleById);

//route addNewVehicle
vehicleRouter.post("/", vehicleController.addNewVehicle);

//route deleteVehicles
vehicleRouter.delete("/:id", vehicleController.deleteVehicle);

//route put
vehicleRouter.put("/:id", vehicleController.updateVehicle);

export default vehicleRouter;

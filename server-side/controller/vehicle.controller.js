import vehicleModel from "../models/vehicle.model.js";

const vehicleController = {
  getAllVehicles: async (req, res) => {
    try {
      const vehicles = await vehicleModel.getAllVehicles();
      res.status(200).json(vehicles);
    } catch (error) {
      console.error(`Error getting Vehicles: ${error}`);
      res.status(500).json({
        error: "Failed to retrieve vehicles from database.",
      });
    }
  },
  getVehicleById: async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const vehicle = await vehicleModel.getVehicleById(id);
      if (!vehicle) {
        return res.status(404).json({
          error: "Vehicle not found",
        });
      } else {
        res.status(200).json(vehicle);
      }
    } catch (error) {
      console.error(`Error getting vehicles: ${error}`);
      res.status(500).json({
        error: "Internal server error",
      });
    }
  },
  addNewVehicle: async (req, res) => {
    try {
      const { name, type, brand, cc, cylinder, price } = req.body;
      //periksa semua data terpenuhi
      if (!name || !type || !brand || !cc || !cylinder || !price) {
        return res.status(400).json({
          error: "All fields are required!",
        });
      }

      const newVehicle = await vehicleModel.addNewVehicle({ name, type, brand, cc, cylinder, price });
      res.status(201).json(newVehicle);
    } catch (error) {
      console.error(`Error getting vehicles: ${error}`);
      res.status(500).json({
        error: "Internal server error",
      });
    }
  },
  updateVehicle: async (req, res, id) => {
    try {
      const id = parseInt(req.params.id);
      const data = req.body;
      const existingVehicle = await vehicleModel.getVehicleById(id);
      //cek apakah vehicle exist
      if (!existingVehicle) {
        return res.status(400).json({
          error: "Vehicle not found",
        });
      }

      const updatedVehicle = await vehicleModel.updateVehicle(id, data);
      if (!(data.name && data.type && data.brand && data.cc && data.cylinder && data.price)) {
        return res.status(400).json({
          message: "Some field are missing!",
        });
      }
      res.status(200).json({
        message: "Vehicle deleted successfully",
        updatedVehicle: updatedVehicle,
      });
    } catch (error) {
      console.error(`Error updating vehicle: ${error}`);
      res.status(500).json({
        error: "Internal server error",
      });
    }
  },
  deleteVehicle: async (req, res, id) => {
    try {
      const id = parseInt(req.params.id);
      const existingVehicle = await vehicleModel.getVehicleById(id);
      //cek apakah vehicle exist
      if (!existingVehicle) {
        return res.status(400).json({
          error: "Vehicle not found",
        });
      }
      //kalo vehicle exist, lanjut ini
      const deletedVehicle = await vehicleModel.deleteVehicle(id);
      res.status(200).json({
        message: "vehicle deleted successfully",
        deletedVehicle: deletedVehicle,
      });
    } catch (error) {
      throw new Error(`Failed to delete vehicle: ${error}`);
    }
  },
};

export default vehicleController;

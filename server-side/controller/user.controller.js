import userModel from "../models/user.model.js";

const userController = {
  getAllUsers: async (req, res) => {
    try {
      const users = await userModel.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      console.error(`Error getting users: ${error}`);
      res.status(500).json({
        error: "Internal server error",
      });
    }
  },
  getUserById: async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const user = await userModel.getUserById(id);

      //cek apakah user tersedia
      if (!user) {
        return res.status(404).json({
          error: "User not found",
        });
      }
      res.status(200).json(user);
    } catch (error) {
      console.error(`Error getting user: ${error}`);
      res.status(500).json({
        error: "Internal server error",
      });
    }
  },
  getUserByUsername: async (req, res) => {
    try {
      const username = req.params.username;
      const user = await userModel.getUserbyUsername(username);
      if (!user) {
        return res.status(404).json({
          error: "Username not found",
        });
      }
      res.status(200).json(user);
    } catch (error) {
      console.error(`Error getting user: ${error}`);
      res.status(500).json({
        error: "Internal server error",
      });
    }
  },
  getUserByEmail: async (req, res) => {
    try {
      const email = req.params.email;
      const user = await userModel.getUserByEmail(email);
      if (!user) {
        return res.status(404).json({
          error: "Email not found",
        });
      }
      res.status(200).json(user);
    } catch (error) {
      console.error(`Error getting user: ${error}`);
      res.status(500).json({
        error: "Internal server error",
      });
    }
  },
  signUp: async (req, res) => {
    try {
      const { username, email, password } = req.body;
      if (!username || !email || !password) {
        return res.status(400).json({
          error: "All fields are required!",
        });
      }
      const newUser = await userModel.signUp({ username, email, password });
      res.status(201).json(newUser);
    } catch (error) {
      console.error(`Sign up failed: ${error}`);
      res.status(500).json({
        error: "Internal server error",
      });
    }
  },
  updateUser: async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const data = req.body;
      const existingUser = await userModel.getUserById(id);

      //memastikan user tersedia
      if (!existingUser) {
        return res.status(400).json({
          error: "User not found",
        });
      }

      const updatedUser = await userModel.updateUser(id, data);
      //memastikan tidak ada form kosong
      if (!(data.username && data.email && data.password)) {
        return res.status(400).json({
          error: "All fields are required",
        });
      }
      res.status(200).json({
        message: "Update user success",
        //menampilkan data user yang diupdate
        updatedUser: updatedUser,
      });
    } catch (error) {
      console.error(`Error updating user: ${error}`);
      res.status(500).json({
        error: "Internal server error",
      });
    }
  },
  deleteUser: async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const existingUser = await userModel.getUserById(id);
      //memastikan user tersedia
      if (!existingUser) {
        return res.status(404).json({
          error: "User not found",
        });
      }
      const deletedUser = await userModel.deleteUser(id);
      res.status(200).json({
        message: "User deleted",
      });
    } catch (error) {
      console.error(`Error deleted user: ${error}`);
      res.status(500).json({
        error: "Internal server error",
      });
    }
  },
};

export default userController;

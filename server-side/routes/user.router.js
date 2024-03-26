import express from "express";
import userController from "../controller/user.controller.js";

const userRouter = express.Router();

// Routes to get all users
userRouter.get("/", userController.getAllUsers);

// Routes to get user by ID
userRouter.get("/:id", userController.getUserById);

// Routes to get user by username
userRouter.get("/username/:username", userController.getUserByUsername);

// Routes to get user by email
userRouter.get("/email/:email", userController.getUserByEmail);

// Routes for sign up (addNewUser)
userRouter.post("/", userController.signUp);

// Routes for updating user
userRouter.put("/:id", userController.updateUser);

// Routes for deleting user
userRouter.delete("/:id", userController.deleteUser);

export default userRouter;

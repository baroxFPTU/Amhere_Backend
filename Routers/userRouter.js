const express = require("express");
const {
  addNewUser,
  getAllUser,
  getUserByRole,
  getUserByName,
  getUserByUId,
  getUserById,
} = require("../Controllers/userController");

const userRouter = express.Router();

userRouter.get("/:userid", getUserByUId);
userRouter.get("/userid/:userid", getUserById);
userRouter.get("/filter/role/:role", getUserByRole);
userRouter.get("/filter/name/:name", getUserByName);
userRouter.get("/", getAllUser);
userRouter.post("/", addNewUser);

module.exports = userRouter;

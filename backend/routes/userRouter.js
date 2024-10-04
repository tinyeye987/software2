const express = require("express");
const {
  register,
  login,
  getAllLectures,
  getAllStudents,
  registerTeacher,
  changePassword,
} = require("../controllers/userController");
const userRouter = express.Router();

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.get("/getAllLectures", getAllLectures);
userRouter.get("/getAllStudents", getAllStudents);
userRouter.post("/registerTeacher", registerTeacher);
userRouter.post("/changePassword", changePassword);

module.exports = userRouter;

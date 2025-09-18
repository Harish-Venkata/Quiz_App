const express = require("express");
const {
  register,
  login,
  logout,
  quizAttempts,
} = require("../controllers/userController.js");
const authenticationUser = require("../middleware/authenticationUser.js");
const userRouter = express.Router();
// const { authenticationUser } = require("../middleware/authenticationUser.js");

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.get("/quiz-attempts", authenticationUser, quizAttempts);
userRouter.post("/logout", logout);

module.exports = userRouter;

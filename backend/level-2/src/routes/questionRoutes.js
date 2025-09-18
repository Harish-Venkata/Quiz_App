const express = require("express");
const {
  getQuestions,
  validateAnswer,
} = require("../controllers/questionControllers.js");
const authenticationUser = require("../middleware/authenticationUser.js");

const questionRouter = express.Router();

questionRouter.get("/", authenticationUser, getQuestions);
questionRouter.post("/validate-answer", authenticationUser, validateAnswer);

module.exports = questionRouter;

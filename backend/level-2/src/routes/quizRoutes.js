const express = require("express");
const {
  submitQuiz,
  completedQuizQuestions,
} = require("../controllers/submitController");
const authenticateUser = require("../middleware/authenticationUser.js");

const quizRouter = express.Router();

quizRouter.post("/submit", authenticateUser, submitQuiz);
quizRouter.get(
  "/completed-quiz-questions",
  authenticateUser,
  completedQuizQuestions
);

module.exports = { quizRouter };

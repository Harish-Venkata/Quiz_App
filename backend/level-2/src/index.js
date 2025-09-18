const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const db = require("./utils/db.js");
const userRouter = require("./routes/userRoutes.js");
const questionRouter = require("./routes/questionRoutes.js");
dotenv.config();
const { LocalStorage } = require("node-localstorage");
const { quizRouter } = require("./routes/quizRoutes.js");

const app = express();
const PORT = process.env.PORT || 3001;

//express Middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const localStorage = new LocalStorage("./scratch");

//database connection
db();
//Routes Middleware
app.use("/api/v1/users", userRouter);
app.use("/api/v1/questions", questionRouter);
app.use("/api/v1/quiz", quizRouter);

//connect server
app.listen(PORT, () => {
  console.log(`Server is on port ${PORT}...💻`);
});

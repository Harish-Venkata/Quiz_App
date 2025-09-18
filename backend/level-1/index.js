const express = require("express");
const cors = require("cors");
const db = require("./utils/db");
const questionRouter = require("./routes/questionRoutes.js");
require("dotenv").config();
const path = require("path");
const { error } = require("console");

const app = express();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

//Database connection
db();

//viee Engine setup
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.set(express.static(path.join(__dirname, "public")));

//Routes
app.use("/api/v1/questions", questionRouter);

//Error handling Middleware
//404 Error
app.use((req, res, next) => {
  const error = new Error("page not found");
  error.status = 404;
  next(error);
});

//general Error Handler
app.use((error, req, res, next) => {
  res.locals.message = error.message;
  res.locals.error = process.env.NODE_ENV === "development" ? error : {};
  res.status(error.status || 500);
  res.render("error"); //Render the error template
});

//Server Start
const port = process.env.port || 4001;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

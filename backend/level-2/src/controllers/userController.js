const User = require("../models/userModel.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    //Validation
    if (!username || !email || !password) {
      console.log("Validation failed: Missing field", req.body);
      return res.status(400).json({
        message: "Name,email and password is required to register",
      });
    }

    //Check if the email exists or not
    const IsEmailExist = await User.findOne({ email });
    if (IsEmailExist) {
      console.log("Validation failed: Email exists");
      return res.status(400).json({
        message: "Email Already exists",
      });
    }
    //hashing password
    const hashPassword = await bcrypt.hash(password, 10);

    //create an new user
    const user = await User.create({ username, email, password: hashPassword });

    console.log("Incoming body:", req.body);

    return res.status(201).json({
      message: "User Succesfully created",
      user,
    });
  } catch (error) {
    console.error("Register error:", error);
    return res.status(400).json({
      message: "Failed to Register User",
    });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({
        message: "Email and passowrd are required to login",
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    //check for the password
    const isPasswordMatched = await bcrypt.compare(password, user.password);

    if (!isPasswordMatched) {
      return res.status(401).json({
        message: "Invalid Credentials",
      });
    }

    const accessToken = jwt.sign(
      {
        userId: user._id,
      },
      process.env.JWT_SECRET_TOKEN,
      {
        expiresIn: "300m",
      }
    );

    return res
      .status(200)
      .json({ message: "Logged in successfully", accessToken });
  } catch (error) {
    res.status(500).json({
      message: "Failed to login",
    });
    console.log(error);
  }
};

const logout = async (req, res) => {
  try {
    // localStorage.removeItem("token");

    return res.status(200).json({ message: "Logged out Succesfully" });
  } catch (error) {
    return res.status(200).json({ message: "Failed to Logout" });
  }
};

const quizAttempts = async (req, res) => {
  try {
    const userId = req.user._id;
    const attempts = await User.findById(userId).populate("quiz_attempts");
    console.log(attempts);

    res.status(200).json({ attempts: attempts.quiz_attempts });
  } catch (error) {
    console.error("Error fetching quiz attempts", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { register, login, quizAttempts, logout };

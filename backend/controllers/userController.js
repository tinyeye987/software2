const User = require("../models/userSchema");
const { sendToken } = require("../utils/jwtToken");

exports.register = async function (req, res, next) {
  try {
    const {
      name,
      indexNumber,
      role,
      email,
      phone,
      password,
      profilePictureURL,
      teamIndexNumber,
    } = req.body;

    if (
      !name ||
      !indexNumber ||
      !role ||
      !email ||
      !phone ||
      !password ||
      !teamIndexNumber
    ) {
      return res.status(404).json({
        success: false,
        message: "Fill all the details",
      });
    }

    const isEmail = await User.findOne({ email: email });

    if (isEmail) {
      return res.status(409).json({
        success: false,
        message: "User all ready regitered",
      });
    }

    const newUser = new User({
      name,
      indexNumber,
      role,
      email,
      phone,
      password,
      profilePictureURL,
      teamIndexNumber,
    });

    const user = await newUser.save();

    res.status(201).json({
      success: true,
      message: "User Registered!",
      user,
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      success: false,
      message: "Error in User Registration",
    });
  }
};

exports.registerTeacher = async function (req, res, next) {
  try {
    const { name, indexNumber, role, email, phone, password } = req.body;

    if (!name || !indexNumber || !role || !email || !phone || !password) {
      return res.status(404).json({
        success: false,
        message: "Fill all the details",
      });
    }

    const isEmail = await User.findOne({ email: email });

    if (isEmail) {
      return res.status(409).json({
        success: false,
        message: "Teacher already regitered",
      });
    }

    const newUser = new User({
      name: name,
      indexNumber: indexNumber,
      role: role,
      email: email,
      phone: phone,
      password: password,
    });

    const user = await newUser.save();

    res.status(201).json({
      success: true,
      message: "Teacher Registered!",
      user,
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      success: false,
      message: "Error in Teacher Registration",
    });
  }
};

exports.changePassword = async function (req, res, next) {
  const { email, oldPassword, newPassword } = req.body;
  if (!email || !oldPassword || !newPassword) {
    return res.status(404).json({
      success: false,
      message: "Fill all details",
    });
  }
  try {
    const user = await User.find({
      email: email,
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "You are not registered",
      });
    }

    const isMatch = user.comparePassword(oldPassword);
    if (!isMatch) {
      return res.status(404).json({
        success: false,
        message: "Old password is incorrect",
      });
    }

    user.password = newPassword;
    await user.save();
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Error in changing password",
    });
  }
};

exports.login = async function (req, res, next) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide email and password.",
      });
    }

    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid Email Or Password.",
      });
    }
    const isPasswordMatched = await user.comparePassword(password);
    if (!isPasswordMatched) {
      return res.status(400).json({
        success: false,
        message: "Invalid Email Or Password.",
      });
    }

    sendToken(user, 201, res, "User Logged In!");
  } catch (err) {
    console.log(err);
    res.status(404).json({
      success: false,
      message: "Error in Login",
    });
  }
};

exports.getAllLectures = async function (req, res, next) {
  try {
    const lectures = await User.find({
      role: "TEACHER",
    });

    if (!lectures) {
      return res.status(400).json({
        success: false,
        message: "No Lectures registered in the portal",
      });
    }

    res.status(201).json({
      success: true,
      message: "Lectures found",
      lectures: lectures,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      message: "Error in getting lectures",
    });
  }
};

exports.getAllStudents = async function (req, res, next) {
  try {
    const lectures = await User.find({
      role: "STUDENT",
    });

    if (!lectures) {
      return res.status(400).json({
        success: false,
        message: "No students registered in the portal",
      });
    }

    res.status(201).json({
      success: true,
      message: "students found",
      students: lectures,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      message: "Error in getting students",
    });
  }
};

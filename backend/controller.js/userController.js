const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Users = require("../models/userModel");
const ApiFeatures = require("../utils/apifeatures");

// All users without any filter
exports.getAllUser = catchAsyncErrors(async (req, res, next) => {
  const users = await Users.find();
  res.status(200).json({
    success: true,
    users,
  });
});

// Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.
exports.getFilteredUser1 = catchAsyncErrors(async (req, res, next) => {
  const users = await Users.find({
    $and: [
      { income: { $lt: "$5" } },
      { $or: [{ car: "BMW" }, { car: "Mercedes-Benz" }] },
    ],
  });
  res.status(200).json({
    success: true,
    users,
  });
});

// Male Users which have phone price greater than 10,000.
exports.getFilteredUser2 = catchAsyncErrors(async (req, res, next) => {
  const users = await Users.find({
    gender: "Male",
    $expr: {
      $gt: [{ $toInt: "$phone_price" }, 10000],
    },
  });
  res.status(200).json({
    success: true,
    users,
  });
});

// Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.
exports.getFilteredUser3 = catchAsyncErrors(async (req, res, next) => {
  const users = await Users.find({
    $and: [
      { car: { $in: ["BMW", "Mercedes-Benz", "Audi"] } },
      { email: { $not: /\d/ } },
    ],
  });

  res.status(200).json({
    success: true,
    users,
  });
});

exports.getFilteredUser4 = catchAsyncErrors(async (req, res, next) => {
  const users = await Users.find({
    last_name: /^M/,
    $expr: {
      $gt: [{ $strLenCP: "$quote" }, 15],
    },
    //  email: { $regex: ".*" + "$last_name" + ".*", $options: "i" }
  });

  res.status(200).json({
    success: true,
    users,
  });
});

const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:[true,"Please Enter Your Id"]
    },
    first_name: {
      type: String,
      required: [true, "Please Enter Your First Name"],
    },
    last_name: {
        type: String,
        required: [true, "Please Enter Your Last Name"],
    },
    email: {
      type: String,
      required: [true, "Please Enter Your Email"],
    },
    gender:{
        type: String,
        required: [true, "Please Enter Your Gender"],
    },
    income:{
        type:String,
        required: [true, "Please Enter Your Income"],
    },
    city:{
        type: String,
        required: [true, "Please Enter Your City"],
    },
    car:{
        type: String,
        required: [true, "Please Enter Your Car Name"],
    },
    quote:{
        type: String,
        required: [true, "Please Enter Your Quote"],
    },
    phone_price:{
        type:String,
        required: [true, "Please Enter Your Phone Price"], 
    }
  });

module.exports = mongoose.model("users", userSchema);
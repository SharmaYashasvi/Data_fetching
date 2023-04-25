const express = require("express");
const app = express();
app.use(express.json());
// route import 
const user = require("./routes/userRoute")

app.use("/api/v1",user);

module.exports = app ;
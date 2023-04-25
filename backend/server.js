const app = require("./app")
const connectDatabase = require("./config/database");
// config path 
const dotenv = require("dotenv");
dotenv.config({path:"backend/config/config.env"});
 
// connecting database
connectDatabase();

app.listen(process.env.PORT,()=>{
    console.log(`Jai Shri Ram On Port ${process.env.PORT}`);
})
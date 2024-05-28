const express = require("express");
const errorHnadler = require("./middleware/errorHandler");

const dotenv = require("dotenv").config();
const app = express();


app.use(express.json()); // this is middleware pass data from server to clint

app.use("/api/contacts", require("./routes/contactRoutes"));
// middleare 
app.use(errorHnadler);
const port =process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})
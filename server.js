const express = require("express");

const dotenv = require("dotenv").config();
const app = express();




app.use("/api/contacts", require("./routes/contactRoutes"));

const port =process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})
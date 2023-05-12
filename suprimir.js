const express = require("express");
const dotenv = require("dotenv");

//configuration the .env file
dotenv.config();

//create Express APP
const app = express();
const port = process.env.PORT || 3001;

// Define the firts Route of APP

app.get('/',(req, res) =>{
    // send Hello World
    res.send('Hello World, Welcome to APP Express + TS + Swagger + Mongoose');
});

// Execute APP and Listen Request to PORT
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
});
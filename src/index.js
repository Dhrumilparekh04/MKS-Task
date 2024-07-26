const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const connectDB = require('./configs/dbConnection');
const indexRoute = require('./routes/indexRoute');

app.use(express.json());

app.use('/api/v1',indexRoute);
app.get("/", (req, res) => {
    res.status(200).send("Welcome to MERN E-Commerce..");
  });
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
    connectDB();
});
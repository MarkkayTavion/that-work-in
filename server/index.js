import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import userRouter from './routes/user.js';
// import env from 'react-dotenv';

const app = express();
// const dotenv = require("dotenv") 


app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

//Routes
app.use("/user", userRouter);

const URL ="mongodb+srv://markkaytavion:Kickball1@mongo-demo-devontae.b1m86.mongodb.net/?retryWrites=true&w=majority"
const PORT = process.env.PORT|| 8000;

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));


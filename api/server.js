import express from "express";
import Color from "colors";
import dotenv from "dotenv";

//Init App
const app = express();
dotenv.config();

const PORT = process.env.PORT || 9090;

app.listen(PORT, () => {
  console.log(`server run on port ${PORT}`.bgGreen.white);
});

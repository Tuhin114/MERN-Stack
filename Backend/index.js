import express, { request } from "express";
import { PORT, mongoURL } from "./config.js";
import mongoose from "mongoose";

const app = express();

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome to MERN Stack Tutorial");
});

mongoose
  .connect(mongoURL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`App is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB", error);
  });

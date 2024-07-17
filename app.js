
import express from "express";
import mongoose from "mongoose";
import router from "./routes/book-routes.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/books", router);

mongoose
  .connect("mongodb://127.0.0.1:27017/BookStoredb")
  .then(() => console.log("Database connected"))
  .then(() => {
    app.listen(5000, () => {
      console.log("Server is running on port 5000");
    });
  })
  .catch((e) => {
    console.log(e);
  });



import mongoose from "mongoose";

mongoose
  .connect("mongodb://127.0.0.1:27017/blog", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(function () {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err.message);
  });

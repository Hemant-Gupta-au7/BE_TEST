import express from "express";

import bodyparser from "body-parser";
import cookieParser from "cookie-parser";

import router from "./route/userRoutes.js";

import "./model/db_connect.js";

const app = express();

app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(router);

app.get('/',(req,res)=>{
  res.send("hi rk")
})


app.listen(process.env.PORT || 3000, () => {
  console.log("Server listening on port 3000");
});

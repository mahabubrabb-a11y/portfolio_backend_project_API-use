


require("dotenv").config();

const express = require("express");
const connectDB = require("./config/database.js");

//const userRouter = require("../src/routes/userRouter.js");

const userRouter = require("./routes/userRouter.js");

const port = process.env.PORT || 4004;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB(); 

app.use("/api", userRouter);

app.get("/", (req, res) => {
  res.json({
    message: "API is Running....."
  });
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});  
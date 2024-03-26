import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import vehicleRouter from "./routes/vehicle.router.js";
import userRouter from "./routes/user.router.js";
//import path from "path";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 9000;

//cors
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

//static file dari file client (FE)
// app.use(express.static(path.join(__dirname, "client/fullstack-orm")));

//first end point
app.use("/api/login", (req, res) => {
  res.status(200).send("First endpoint success");
});

//middleware
app.use(morgan("combined"));
app.use(express.json());

//routes
app.use("/v1/vehicle", vehicleRouter);
app.use("/v1/User", userRouter);

//port listen
app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
  console.log("Postgres connection ready!");
});

export default app;
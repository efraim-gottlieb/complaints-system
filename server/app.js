import express from "express";
import complaintsRoutes from "./routes/complaintsRoutes.js";

const app = express();
const port = 8000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
  console.log("pinging root");
});

app.use("/complaints", complaintsRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

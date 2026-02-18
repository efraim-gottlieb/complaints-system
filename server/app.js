import express from "express";
import complaintsRoutes from "./routes/complaintsRoutes.js";

const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/", (req, res) => {
  res.send("hello");
  console.log("pinging root");
});

app.use("/complaints", complaintsRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

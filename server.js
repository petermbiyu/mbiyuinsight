import express from "express";
import cors from "cors";

const PORT = 8000;

const app = express();
app.use(express.static("public"));
app.use(cors());

app.listen(PORT, () => {
  console.log("Connected at port: " + PORT);
});

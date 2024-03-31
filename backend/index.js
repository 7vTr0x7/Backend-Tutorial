import express from "express";
import path from "path";

const app = express();

app.set("view engine", "ejs");

app.use(express.static(path.join(path.resolve(), "public")));

app.get("/", (req, res) => {
  res.render("index", { name: "vtrox" });
});
app.post("/", (req, res) => {
  console.log(req.body);
});

app.listen(5000, () => {
  console.log("ckjc");
});

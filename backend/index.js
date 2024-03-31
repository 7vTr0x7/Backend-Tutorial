import express from "express";
import path from "path";

const app = express();
const users = [];

app.set("view engine", "ejs");

app.use(express.static(path.join(path.resolve(), "public")));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index", { name: "vtrox" });
});
app.post("/", (req, res) => {
  console.log(req.body);
  users.push({ userName: req.body.name, email: req.body.email });
  res.render("success");
});

app.listen(5000, () => {
  console.log("ckjc");
});

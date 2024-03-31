import express from "express";
import path from "path";
import mongoose from "mongoose";
import { name } from "ejs";

mongoose
  .connect("mongodb://127.0.0.1:27017", {
    dbName: "backend",
  })
  .then(() => console.log("connected"))
  .catch((e) => console.log("Error", e));

const app = express();
const users = [];

const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const Message = mongoose.model("Message", messageSchema);

app.set("view engine", "ejs");

app.use(express.static(path.join(path.resolve(), "public")));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index", { name: "vtrox" });
});

app.get("/add", (req, res) => {
  res.send("nice");
});

app.post("/contact", (req, res) => {
  Message.create({ name: req.body.name, email: req.body.email });
  res.render("success");
});

app.get("/users", (req, res) => {
  res.json({
    users,
  });
});

app.listen(5000, () => {
  console.log("ckjc");
});

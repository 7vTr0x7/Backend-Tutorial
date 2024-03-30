import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.listen(5000, () => {
  console.log("ckjc");
});

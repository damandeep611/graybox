const express = require("express");
const { UserModel, TodoModel } = require("./db");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "martian42";

mongoose.connect(
  "mongodb+srv://themonkspeaks:ZdJvZmNc0tz8fFlQ@cluster0.jse9x.mongodb.net/martian-18"
);
const app = express();
app.use(express.json());

app.post("/signup", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;

  await UserModel.create({
    email: email,
    password: password,
    name: name,
  });
  res.json({
    message: "You are logged in",
  });
});

app.post("/signin", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = await UserModel.findOne({
    email: email,
    password: password,
  });
  console.log(user);

  if (user) {
    const token = jwt.sign(
      {
        id: user._id,
      },
      JWT_SECRET
    );
    res.json({
      token: token,
    });
  } else {
    res.status(403).json({
      message: "Incorrect credentials",
    });
  }
});

app.post("/todo", (req, res) => {
  //
});

app.get("/todos", (req, res) => {
  //
});

app.listen(3000);

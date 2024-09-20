const express = require("express");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "martian42";

const app = express();
app.use(express.json());

const users = [];

function logger(req, res, next) {
  console.log(req.method + "request came");
  next();
}

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/signup", logger, (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  users.push({
    username: username,
    password: password,
  });
  res.json({
    message: "You are signed in ",
  });
});

app.post("/signin", logger, (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  let foundUser = null;

  for (let i = 0; i < users.length; i++) {
    if (users[i].username === username && users[i].password === password) {
      foundUser = users[i];
    }
  }
  if (!foundUser) {
    res.json({
      message: "credentials Incorrect",
    });
    return;
  } else {
    const token = jwt.sign(
      {
        username: users[i].username,
      },
      JWT_SECRET
    );
    res.header("jwt", token);
    res.header("random", "martian");
    res.json({
      token: token,
    });
  }
});

function auth(req, res, next) {
  const token = req.headers.token;
  const decodeData = jwt.verify(token, JWT_SECRET);

  if (decodeData.username) {
    req.username = decodeData.username;
    next();
  } else {
    res.json({
      message: "you are not logged in ",
    });
  }
}

app.get("/me", logger, auth, (req, res) => {
  const currentUser = req.username;

  for (let i = 0; i < users.length; i++) {
    if (users[i].username === currentUser) {
      foundUser = users[i];
    }
  }
  res.json({
    username: foundUser.username,
    password: foundUser.password,
  });
});

app.listen(3000);

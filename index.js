const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyparser.urlencoded({ extended: true }));

app.get("/add", (req, res) => {
  res.sendFile(__dirname + "/" + "index.html");
});
app.get("/sub", (req, res) => {
  res.sendFile(__dirname + "/" + "index.html");
});
app.get("/mul", (req, res) => {
  res.sendFile(__dirname + "/" + "index.html");
});
app.get("/div", (req, res) => {
  res.sendFile(__dirname + "/" + "index.html");
});

const addMid = (req, res, next) => {
  const n1 = Number(req.body.num1);
  const n2 = Number(req.body.num2);
  const add = n1 + n2;
  res.send("the value is" + add);
  next();
};
const subMid = (req, res, next) => {
  const n1 = Number(req.body.num1);
  const n2 = Number(req.body.num2);
  const sub = n1 - n2;
  res.send("the value is" + sub);
  next();
};
const mulMid = (req, res, next) => {
  const n1 = Number(req.body.num1);
  const n2 = Number(req.body.num2);
  const mul = n1 * n2;
  res.send("the value is" + mul);
  next();
};
const divMid = (req, res, next) => {
  const n1 = Number(req.body.num1);
  const n2 = Number(req.body.num2);
  const div = n1 / n2;
  res.send("the value is" + div);
  next();
};
app.post("/add", addMid);
app.post("/sub", subMid);
app.post("/mul", mulMid);
app.post("/div", divMid);

app.listen(port, () => {
  console.log(`app listening on http://localhost:${port}`);
});

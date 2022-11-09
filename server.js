const express = require("express");
const app = express();
const config = require("./config.json");
const port = config.PORT || 3000;
const bodyParser = require("body-parser");
const text = require("./app");

const phone_numbers = [
  { name: "Ike", phone: "+14157607438" },
  { name: "Ike Google", phone: "+14156598505" },
  {}
];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use(function (req, res) {
//   //   res.status(404).send({ url: req.originalUrl + " not found" });
//   //   console.log("404 request sent");
//   console.log(req.originalUrl);
//   return;
// });

app.get("/", (req, res) => {
  res.send("No one should be sending a get request");
});

app.post("*", (req, res) => {
  res.send(req.body.text); // this must be active in order to not stall out server
  console.log(req.body);
  let text_body = `[AUTOMATED] - ${req.body.user_name} - ${req.body.text}`;
  text(text_body, phone_numbers);
});

app.listen(port);

console.log(`Listening on port ${port}...`);

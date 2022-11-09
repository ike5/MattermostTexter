const express = require("express");
const app = express();
const config = require("./config.json");
const port = config.PORT || 3000;
const bodyParser = require("body-parser");

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
    // res.send(req.body.text);
    console.log(req.body)
});


app.listen(port);
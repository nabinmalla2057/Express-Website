const express = require("express");

const app = express();

app.get("/ ", (req, res) => {
  res.send("Hello World");
});

app.listen(3340);
console.log("App is running in port 3340 ");

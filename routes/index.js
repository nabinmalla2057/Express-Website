const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.get("/:name/:roll", (req, res) => {
  console.log(req.query); // Uncomment this line if you want to see the query parameters in the console
  const { address } = req.query; // Fix the variable name here
  const { name, roll } = req.params;
  res.send(`Hello ${name}. You are from ${address} and your roll is ${roll}`);
});

module.exports = router;

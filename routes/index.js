const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/componets", (req, res) => {
  res.render("components");
});
module.exports = router;

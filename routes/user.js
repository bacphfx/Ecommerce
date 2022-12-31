const router = require("express").Router();

router.get("/usertest", (req, res) => {
  res.send("test is successful!");
});

router.post("/posttest", (req, res) => {
  const username = req.body.username;
  res.send("your username is " + username);
});

module.exports = router;

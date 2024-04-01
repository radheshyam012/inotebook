const express = require("express");
const User = require("../models/User");
const router = express.Router();

//create user Post ,doest required auth /api/auth/

router.post("/", (req, res) => {
  console.log(req.body);
  const user = new User(req.body);
  user.save();
  res.send(req.body);
});

// router.get("/", (req, res) => {
//   console.log(req.body);
//   res.send("radhe");
// });

module.exports = router;

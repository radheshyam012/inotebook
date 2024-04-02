const express = require("express");
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");

//create user Post ,doest required auth /api/auth/

router.post(
  "/createuser",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be atleast 6 chracters").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    //if there are errors ,return bad request
    const error = validationResult(req);
    if (!error.isEmpty()) {
      res.status(400).json({ errors: error.array() });
    }
    //check weather the user with same email exists already
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry user with this email already exists!" });
      }
      //create new user
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });
      const JWT_SECRET = "Radhe";
      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);

      res.json({authToken});
      // res.json(user);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some error occured");
    }
  }
);

// router.get("/", (req, res) => {
//   console.log(req.body);
//   res.send("radhe");
// });

module.exports = router;

const jwt = require("jsonwebtoken");
// const SECRET_KEY = process.env.SECRET_KEY;
const JWT_SECRET = "Radhe";

const Fetchuser = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    return res.status(401).send({ error: "UnAthorized user" });
  }
  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
  } catch (error) {
    return res.status(401).send({ error: "Unauthorized User" });
  }
};

module.exports = Fetchuser;

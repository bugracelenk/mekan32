const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, "secret");
      req.user = decoded;
      next();
    } else {
      throw new Error("Authentication Failed!");
    }
  } catch (err) {
    return res.json({
      status: false,
      message: err.message,
    });
  }
};

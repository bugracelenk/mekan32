module.exports = async (req, res, next) => {
  try {
    if (req.user.userType !== "Admin") {
      throw new Error("Not Authorized!");
    } else {
      next();
    }
  } catch (err) {
    return res.status(401).json({
      status: false,
      message: err.message,
    });
  }
};

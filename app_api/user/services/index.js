const { UserModel } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (userData) => {
  const encryptedPassword = await bcrypt.hash(userData.password, 10);
  userData.password = encryptedPassword;
  return await UserModel.create(userData);
};

const login = async (email, password) => {
  const user = await UserModel.findOne({ email });
  if (!user) throw new Error("Authentication Failed!");

  const { name, surname } = user;

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) throw new Error("Authentication Failed!");

  const token = jwt.sign(
    {
      email,
      name,
      surname,
    },
    "secret",
    { expiresIn: "365d" }
  );

  return token;
};

module.exports = {
  login,
  register,
};

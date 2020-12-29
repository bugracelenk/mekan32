const UserService = require("../services");
const promiseHandler = require("../../utils/promiseHandler");
const { returnResult, returnError } = require("../../utils/returnResponse");

const login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json(returnError("Missing fields!"));

  const [error, token] = await promiseHandler(UserService.login(email, password));
  if (error) return res.status(418).json(returnError(error));

  return res.status(200).json(returnResult({ token }));
};

const register = async (req, res, next) => {
  const { name, surname, email, password } = req.body;
  if (!name || !surname || !email || !password) return res.status(400).json(returnError("Missing fields!"));

  const [error] = await promiseHandler(UserService.register({ name, surname, email, password }));
  if (error) return res.status(418).json(returnError(error));

  const [loginError, token] = await promiseHandler(UserService.login(email, password));
  if (loginError) return res.status(418).json(returnError(loginError));

  return res.status(200).json(returnResult({ token }));
};

module.exports = {
  login,
  register,
};

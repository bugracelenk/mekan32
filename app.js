const createError = require("http-errors");
const express = require("express");
require("./app_api/db");
require("./app_api/places/models/index");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const helmet = require("helmet");
const favicon = require("serve-favicon");

const { mainRouter, usersRouter, adminRouter, placeRouter } = require("./app_server/routes");
const apiPlaceRouter = require("./app_api/places/routes/");
const apiUserRouter = require("./app_api/user/routes/");
const apiCommentRouter = require("./app_api/comments/routes/");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "app_server", "views"));
app.set("view engine", "pug");

app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")));
app.use(helmet());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", mainRouter);
app.use("/users", usersRouter);
app.use("/admin", adminRouter);
app.use("/place", placeRouter);

//api routes
app.use("/api/place", apiPlaceRouter);
app.use("/api/user", apiUserRouter);
app.use("/api/comment", apiCommentRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;

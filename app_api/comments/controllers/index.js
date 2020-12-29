const CommentService = require("../service");
const PlaceService = require("../../places/services");
const promiseHandler = require("../../utils/promiseHandler");
const { returnResult, returnError } = require("../../utils/returnResponse");
const { validateQuery, validateId } = require("../../utils/validation");
const { validQueries } = require("../comments.module");
const pagination = require("../../utils/setPagination");

const createComment = async (req, res, next) => {
  try {
    const { comment, placeId, point } = req.body;
    if (!comment || !placeId) return res.status(400).json(returnError("Missing fields!"));

    const [placeError, place] = await promiseHandler(PlaceService.getPlaceById(placeId));
    if (placeError) return res.status(418).json(returnError(placeError));

    const [commentError, comment] = await promiseHandler(CommentService.createComment({ comment, author: req.user._id, point: point || 0 }));
    if (commentError) return res.status(418).json(returnError(commentError));

    place.comments = [...place.comments, comment._id];
    place.point = (place.point + point || 0) / place.comments.length;

    await place.save();

    return res.status(201).json(returnResult({ comment }));
  } catch (err) {
    console.log(err);
    return res.status(418).json(returnError(err));
  }
};

const getComments = async (req, res, next) => {
  const filters = validateQuery(req.query, validQueries, ["skip", "limit"]);
  const { limit, skip } = req.query;

  const options = {
    skip: pagination.setSkip(skip, limit),
    limit: pagination.setLimit(limit),
  };

  const [error, comments] = await promiseHandler(CommentService.getComments(filters, options));
  if (error) return res.status(418).json(returnError(error));

  return res.status(200).json(returnResult({ comments }));
};

const updateComment = async (req, res, next) => {
  const { comment, point, place } = req.body;
  const { id } = req.query;

  if (!id || !validateId(id)) return res.status(418).json(returnError("Not a valid ObjectID!"));

  const updateArgs = {};

  if (place && validateId(place)) {
    updateArgs["place"] = place;
  } else {
    return res.status(400).json(returnError("Not a valid ObjectID!"));
  }
  comment ? (updateArgs["comment"] = comment) : null;
  point ? (updateArgs["point"] = point) : null;

  const [error, updatedComment] = await promiseHandler(CommentService.updateComment(id, updateArgs));
  if (error) return res.status(418).json(returnError(error));

  return res.status(200).json(returnResult({ updatedComment }));
};

const removeComment = async (req, res, next) => {
  const { id } = req.query;
  if (!id || !validateId(id)) return res.status(418).json(returnError("Not a valid ObjectID!"));

  const [error] = await promiseHandler(CommentService.removeComment(id));
  if (error) return res.status(418).json(returnError(error));

  return res.status(200).json(returnResult({ message: `comment with the id of ${id} is deleted!` }));
};

module.exports = {
  createComment,
  getComments,
  updateComment,
  removeComment,
};

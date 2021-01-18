const { CommentModel } = require("../models");

const getComments = async (filters, options) => {
  return await CommentModel.find(filters, {}, options).select("-__v").populate({ path: "place", select: "-__v -comments", model: "Place" });
};

const createComment = async (commentData) => {
  return await CommentModel.create(commentData);
};

const updateComment = async (commentId, args) => {
  return await CommentModel.findByIdAndUpdate(commentId, { $set: args });
};

const removeComment = async (commentId) => {
  return await CommentModel.findByIdAndDelete(commentId);
};

module.exports = {
  getComments,
  createComment,
  updateComment,
  removeComment,
};

const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
  {
    author: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    point: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    place: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Place",
    },
  },
  { timestamps: true }
);

const CommentModel = mongoose.model("Comment", CommentSchema);

module.exports = {
  CommentSchema,
  CommentModel,
};

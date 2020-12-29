const mongoose = require("mongoose");

const HoursSchema = new mongoose.Schema(
  {
    days: {
      type: String,
      required: true,
      default: "Her Gün",
    },
    opening: {
      type: String,
      default: "00:00",
    },
    closing: {
      type: String,
      default: "00:00",
    },
    isOpen: {
      type: Boolean,
      default: true,
    },
  },
  { usePushEach: true }
);

const PlaceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    point: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    facilities: {
      type: [String],
      default: [],
    },
    coordinates: {
      type: [Number],
      index: "2dsphere",
    },
    weekday: { type: HoursSchema },
    weekend: { type: HoursSchema },
    comments: {
      type: [mongoose.Schema.Types.ObjectId],
      default: [],
      ref: "Comment",
    },
    isOpen: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const PlaceModel = mongoose.model("Place", PlaceSchema);

module.exports = {
  PlaceSchema,
  PlaceModel,
  HoursSchema,
};

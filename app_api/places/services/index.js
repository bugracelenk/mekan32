const { PlaceModel } = require("../models");

const createPlace = async (data) => {
  return await PlaceModel.create(data);
};

const getPlaces = async (query, limit, skip) => {
  return await PlaceModel.find(query).limit(limit).skip(skip).populate({ path: "comments", model: "Comment", select: "-__v" }).exec();
};

const getPlacesByCoordinates = async (point) => {
  const geoOptions = {
    near: point,
    distanceField: "distance",
    spherical: true,
    key: "coordinates",
  };

  return await PlaceModel.aggregate([{ $geoNear: geoOptions }]).exec();
};

const getPlaceById = async (placeId) => {
  return await PlaceModel.findById(placeId).populate({ path: "comments", model: "Comment", select: "-__v" }).exec();
};

const removePlace = async (placeId) => {
  return await PlaceModel.findByIdAndDelete(placeId).exec();
};

const updatePlace = async (placeId, updateFields) => {
  return await PlaceModel.findByIdAndUpdate(placeId, { $set: updateFields }).exec();
};

module.exports = {
  getPlaces,
  getPlacesByCoordinates,
  getPlaceById,
  removePlace,
  updatePlace,
  createPlace,
};

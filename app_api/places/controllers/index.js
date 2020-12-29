const PlaceService = require("../services");
const pagination = require("../../utils/setPagination");
const promiseHandler = require("../../utils/promiseHandler");
const { returnResult, returnError } = require("../../utils/returnResponse");
const { validateId, validateBody } = require("../../utils/validation");
const { validFields } = require("../places.module");

const getPlaces = async (req, res, next) => {
  const { longitude, altitude, limit, skip, name } = req.query;

  const _limit = parseInt(limit);
  const _skip = parseInt(limit) * parseInt(skip);

  const [error, places] = await promiseHandler(
    longitude && altitude
      ? PlaceService.getPlacesByCoordinates({ type: "Point", coordinates: [parseFloat(altitude), parseFloat(longitude)] })
      : PlaceService.getPlaces(name ? { name } : {}, _limit, _skip)
  );

  if (error) {
    return res.status(500).json(returnError(error));
  }
  return res.status(200).json(returnResult({ places }));
};

const getPlaceById = async (req, res, next) => {
  const { id } = req.params;

  if (!validateId(id)) {
    return res.json(500).json(returnError("Not a valid id"));
  }

  const [error, place] = await promiseHandler(PlaceService.getPlaceById(id));

  if (error) {
    return res.status(500).json(returnError(error));
  }

  return res.status(200).json(returnResult({ place }));
};

const createPlace = async (req, res, next) => {
  const data = validateBody(req.body, validFields, false);

  if (!req.body.altitude || !req.body.longitude) return res.status(500).json(returnError("Missing fields!"));

  data.coordinates = [parseFloat(req.body.altitude), parseFloat(req.body.longitude)];

  const [error, newPlace] = await promiseHandler(PlaceService.createPlace(data));

  if (error) {
    return res.status(500).json(returnError(error));
  }

  return res.status(200).json(returnResult({ newPlace }));
};

const removePlace = async (req, res, next) => {
  const { id } = req.query;

  if (!id || !validateId(id)) return res.status(500).json(returnError("Not a valid id!"));

  const [error] = await promiseHandler(PlaceService.removePlace(id));

  if (error) {
    return res.status(500).json(returnError(error));
  }

  return res.status(200).json(returnResult({ message: `${id} place has been deleted` }));
};

const updatePlace = async (req, res, next) => {
  const { id } = req.query;

  if (!id || !validateId(id)) return res.status(500).json(returnError("Not a valid id!"));

  let updateFields = {};

  req.body.map((ops) => (updateFields[ops.propName] = ops.value));

  const [error, updatedPlace] = await promiseHandler(PlaceService.updatePlace(id, updateFields));

  if (error) {
    return res.status(500).json(returnError(error));
  }

  return res.status(200).json(returnResult({ updatedPlace }));
};

module.exports = {
  getPlaceById,
  getPlaces,
  removePlace,
  createPlace,
  updatePlace,
};

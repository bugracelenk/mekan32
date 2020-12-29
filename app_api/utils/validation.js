const ObjectId = require("mongoose").Types.ObjectId;

const validateId = (id) => {
  return ObjectId.isValid(id);
};

const validateQuery = (query = {}, validQueries = [], exceptions = []) => {
  let filter = {};
  let keys = Object.keys(query);
  if (exceptions) {
    keys = keys.filter((key) => {
      return !exceptions.includes(key) && validQueries.includes(key);
    });
  }

  keys.map((key) => {
    if (validQueries.includes(key)) {
      filter[key] = query[key];
    }
  });

  return filter;
};

const validateBody = (body = {}, validFields = [], validate = false) => {
  let fields = {};
  let keys = Object.keys(body);

  if (validate) {
    if (keys.length !== validFields.length) {
      return { error: "Eksik Alanlar Var!" };
    }
  }

  keys.map((key) => {
    if (validFields.includes(key)) {
      fields[key] = body[key];
    }
  });

  return fields;
};

module.exports = {
  validateId,
  validateQuery,
  validateBody,
};

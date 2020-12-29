const setLimit = (limit) => {
  let _limit = parseInt(limit);
  return _limit;
};

const setSkip = (skip, limit) => {
  let _skip = skip ? parseInt(skip) : 0;
  return _skip * setLimit(limit);
};

module.exports = { setLimit, setSkip };

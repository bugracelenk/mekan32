const returnResult = (data) => {
  return {
    status: true,
    ...data,
  };
};

const returnError = (error) => {
  return {
    status: false,
    error,
  };
};

module.exports = {
  returnResult,
  returnError,
};

/* eslint-disable arrow-body-style */
const sendSuccessResponse = (res, code, records) => {
  return res.status(code).json({
    code: 0,
    msg: 'success',
    records,
  });
};

const sendFailureResponse = (res, code, data) => {
  return res.status(code).json({
    code: 1,
    msg: data,
  });
};

module.exports = {
  sendFailureResponse,
  sendSuccessResponse,
};

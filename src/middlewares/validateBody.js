/* eslint-disable no-multi-assign */
/* eslint-disable no-undef */
/* eslint-disable arrow-body-style */
/* eslint-disable array-callback-return */
const { sendFailureResponse } = require('../utils/appResponse');

module.exports = validateBody = (schema) => {
  return (req, res, next) => {
    const options = {
      abortEarly: false,
      allowUnknown: true,
      stripUnknown: true,
    };

    // validate request body against schema
    const { error, value } = schema.validate(req.body, options);

    if (error) {
      const errorArray = [];
      error.details.map((result) => {
        errorArray.push({ [result.path]: result.message });
      });
      sendFailureResponse(res, 422, errorArray);
    } else {
      req.body = value;
      next();
    }
  };
};

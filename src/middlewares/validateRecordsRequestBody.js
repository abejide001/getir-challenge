const { body } = require("express-validator");

const recordValidationRules = () => {
  return [
    body("minCount")
    .trim()
      .not()
      .isEmpty()
      .withMessage("minCount is required")
      .isNumeric()
      .withMessage("minCount must be a number"),

    body("maxCount")
      .trim()
      .not()
      .isEmpty()
      .withMessage("minCount is required")
      .isNumeric()
      .withMessage("minCount must be a number"),

    body("startDate")
      .trim()
      .not()
      .isEmpty()
      .withMessage("startDate is required")
      .isDate()
      .withMessage("startDate must be a date"),

    body("endDate")
      .trim()
      .not()
      .isEmpty()
      .withMessage("endDate is required")
      .isDate()
      .withMessage("endDate must be a date"),
  ];
};

module.exports = recordValidationRules;

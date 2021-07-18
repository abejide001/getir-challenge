/* eslint-disable array-callback-return */
const Joi = require('joi');

// create schema object
const filterRecordSchema = Joi.object({
  maxCount: Joi.number().required().strict().messages({
    'number.base': 'maxCount must be a number',
    'number.empty': 'maxCount field is required',
    'any.required': 'maxCount field is required',
  }),
  minCount: Joi.number().required().strict().messages({
    'number.base': 'minCount must be a number',
    'number.empty': 'minCount field is required',
    'any.required': 'minCount field is required',
  }),

  startDate: Joi.date().raw().required().iso().messages({
    'date.base': 'startDate must be a date',
    'date.empty': 'startDate field is required',
    'any.required': 'startDate field is required',
  }),

  endDate: Joi.date().raw().required().messages({
    'date.base': 'endDate must be a date',
    'date.empty': 'endDate field is required',
    'any.required': 'endDate field is required',
  }),
});

module.exports = filterRecordSchema;

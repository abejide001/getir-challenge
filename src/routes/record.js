const express = require('express');
const filterRecord = require('../controller/RecordController');
const validateBody = require('../middlewares/validateBody');
const recordValidationRules = require('../middlewares/validateRecordsRequestBody');

const recordRouter = express.Router();

recordRouter.post('/', recordValidationRules(), validateBody, filterRecord);

module.exports = recordRouter;

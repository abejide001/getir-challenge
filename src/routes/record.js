const express = require('express');
const filterRecord = require('../controller/RecordController');
const filterRecordSchema = require('../middlewares/schema');
const validateBody = require('../middlewares/validateBody');

const recordRouter = express.Router();

recordRouter.post('/', validateBody(filterRecordSchema), filterRecord);

module.exports = recordRouter;

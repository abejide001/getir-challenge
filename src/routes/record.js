const express = require("express")
const createRecord = require("../controller/RecordController")
const validateBody = require("../middlewares/validateBody")
const recordValidationRules = require("../middlewares/validateRecordsRequestBody")

const recordRouter = express.Router()

recordRouter.post("/", recordValidationRules(), validateBody, createRecord)

module.exports = recordRouter
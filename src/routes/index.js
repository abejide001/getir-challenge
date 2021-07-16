
const express = require("express")
const swaggerUi = require("swagger-ui-express")
const swaggerDocument = require("../docs/swagger.json")
const recordRoute = require("./record")

const routes = () => {
  const router = express.Router()
  router.use("/records", recordRoute)
  router.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))
  return router
}

module.exports = routes
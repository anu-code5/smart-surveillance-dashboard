const express = require("express")
const router = express.Router()

const protect =
require("../middleware/authMiddleware")

const {
    createIncident,
    getIncidents
} = require("../controllers/incidentController")

router.get(
    "/",
    protect,
    getIncidents
)

router.post(
    "/",
    protect,
    createIncident
)

module.exports = router
const express = require("express")
const router = express.Router()

const protect =
require("../middleware/authMiddleware")

const {
    createIncident,
    getIncidents
} = require("../controllers/incidentController")

const upload =
require("../middleware/uploadMiddleware")

router.get(
    "/",
    protect,
    getIncidents
)

router.post(
  "/",
  protect,
  upload.single("image"),
  createIncident
)

module.exports = router
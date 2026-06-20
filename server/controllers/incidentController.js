const {
    detectObjects
} = require("../services/aiService")
const path = require("path")
const Incident = require("../models/Incident")

const createIncident = async (req, res) => {
    let detectedObject = "Unknown"
    let confidence = 0
    let detections = []
    let severity = "Low"

    if (req.file) {

        detections =
            await detectObjects(
                req.file.path
            )

        if (detections.length > 0) {

            detectedObject =
                detections[0].object

            confidence =
                detections[0].confidence
        }

        const personCount =
            detections.filter(
                d =>
                d.object === "person"
            ).length

        if (personCount >= 5) {
            severity = "High"
        }
        else if (
            personCount >= 2
        ) {
            severity = "Medium"
        }
    }

    

    

    try {

        const incident =
            await Incident.create({

                title: req.body.title,

                description:
                    req.body.description,

                imageUrl:
                    req.file
                    ? `/uploads/${req.file.filename}`
                    : "",

                detectedObject,

                confidence,

                detections,

                severity,

                createdBy:
                    req.user.id
            })

        res.status(201).json(incident)

    } catch (error) {

        res.status(500).json({
            message: error.message
        })

    }
}

const getIncidents = async (req, res) => {

    try {

        const incidents = await Incident.find()
            .populate("createdBy", "name email")

        res.status(200).json(incidents)

    } catch (error) {

        res.status(500).json({
            message: error.message
        })

    }
}
module.exports = {
    createIncident,
    getIncidents
}
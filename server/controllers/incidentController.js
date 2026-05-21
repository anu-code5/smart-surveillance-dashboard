const Incident = require("../models/Incident")

const createIncident = async (req, res) => {

    try {

        const incident = await Incident.create({

            title: req.body.title,

            description:
                req.body.description,

            imageUrl:
                req.file
                    ? `/uploads/${req.file.filename}`
                    : "",

            createdBy: req.user.id
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
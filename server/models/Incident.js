const mongoose = require("mongoose")

const incidentSchema = new mongoose.Schema(
{
    title: {
        type: String,
        required: true
    },

    imageUrl: {
        type: String
    },

    description: {
        type: String,
        required: true
    },

    detectedObject: {
        type: String,
        default: "Unknown"
    },

    confidence: {
        type: Number,
        default: 0
    },

    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }

},
{
    timestamps: true
})

module.exports = mongoose.model(
    "Incident",
    incidentSchema
)
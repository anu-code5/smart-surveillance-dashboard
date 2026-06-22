const axios = require("axios")
const FormData = require("form-data")
const fs = require("fs")

const detectObjects = async (filePath) => {

    const form = new FormData()

    form.append(
        "image",
        fs.createReadStream(filePath)
    )

    const response =
        await axios.post(
            "https://smart-surveillance-ai.onrender.com/detect",
            form,
            {
                headers:
                    form.getHeaders()
            }
        )

    return response.data
}

module.exports = {
    detectObjects
}
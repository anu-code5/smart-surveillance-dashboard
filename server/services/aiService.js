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
            "http://127.0.0.1:8000/detect",
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
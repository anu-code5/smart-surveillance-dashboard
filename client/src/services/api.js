import axios from "axios"

const API =
    axios.create({
    baseURL:
        "https://smart-surveillance-dashboard.onrender.com/api"
    })

export default API
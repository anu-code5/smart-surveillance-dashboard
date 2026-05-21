const mongoose = require("mongoose")
require("dotenv").config()
const authRoutes = require("./routes/authRoutes")
const userRoutes = require("./routes/userRoutes")
const incidentRoutes = require("./routes/incidentRoutes")
const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())
app.use("/api/auth", authRoutes)
app.use("/api/user", userRoutes)
app.use("/api/incidents",incidentRoutes)
//console.log("MONGO_URI =", process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err))

app.get("/", (req, res) => {
    res.send("API Running")
})

const PORT = 5000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});

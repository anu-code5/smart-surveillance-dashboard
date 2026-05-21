import { useEffect, useState } from "react"
import axios from "axios"

function Dashboard() {

  const [incidents, setIncidents] = useState([])

  useEffect(() => {

    const fetchIncidents = async () => {

      const token =
        localStorage.getItem("token")

      const res = await axios.get(
        "http://localhost:5000/api/incidents",
        {
          headers: {
            Authorization:
              `Bearer ${token}`
          }
        }
      )

      setIncidents(res.data)
    }

    fetchIncidents()

  }, [])

  return (
    <div>

      <h1>Dashboard</h1>

      {incidents.map((incident) => (

        <div key={incident._id}>

          <h3>{incident.title}</h3>

          <p>
            {incident.description}
          </p>

        </div>

      ))}

    </div>
  )
}

export default Dashboard
import { useEffect, useState } from "react"
//import axios from "axios"
import API from "../services/api"

import Navbar from "../components/Navbar"
import IncidentForm from "../components/IncidentForm"
import IncidentCard from "../components/IncidentCard"

function Dashboard() {

    const [incidents, setIncidents] =
        useState([])

    const fetchIncidents =
        async () => {

            const token =
                localStorage.getItem("token")

            const res =
                await API.get(
                    "/incidents",
                    {
                        headers: {
                            Authorization:
                                `Bearer ${token}`
                        }
                    }
                )

            setIncidents(res.data)
        }

    useEffect(() => {

        fetchIncidents()

    }, [])

    return (

        <div
            className="
            min-h-screen 
            bg-gradient-to-br
            from-blue-600
            via-cyan-400
            to-slate-300
            "
        >
            <Navbar />

              <div
                className="
                  bg-white/70
                  backdrop-blur-md
                  shadow-xl
                  rounded-3xl
                  p-8
                  border
                  border-white/2000
                  "
              >


                <IncidentForm
                    refreshIncidents={
                        fetchIncidents
                    }
                />

                <div
                    className="
                        grid
                        md:grid-cols-2
                        gap-4
                    "
                >

                    {incidents.map(
                        (incident) => (

                            <IncidentCard
                                key={
                                    incident._id
                                }
                                incident={
                                    incident
                                }
                            />

                        )
                    )}

                </div>
              </div>

         </div>

    )
}

export default Dashboard
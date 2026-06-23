import { useEffect, useState } from "react"
//import axios from "axios"
import API from "../services/api"

import Navbar from "../components/Navbar"
import IncidentForm from "../components/IncidentForm"
import IncidentCard from "../components/IncidentCard"
import AnalyticsCards from "../components/AnalyticsCards"
import ObjectDetectionChart from "../components/ObjectDetectionChart"
import SeverityChart from "../components/SeverityChart"
import LiveCamera from "../components/LiveCamera"

function Dashboard() {

    const [incidents, setIncidents] =
        useState([])
    const [user, setUser] =
        useState(null)

    const [filter, setFilter] =
        useState("All")

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

    const fetchUser = async () => {

        const token =
            localStorage.getItem("token")

        const res =
            await API.get(
            "/user/profile",
            {
                headers: {
                Authorization:
                    `Bearer ${token}`
                }
            }
            )

        setUser(res.data)
        }

    useEffect(() => {

        fetchIncidents(),
        fetchUser()

    }, [])

    const filteredIncidents =
        filter === "All"
            ? incidents
            : incidents.filter(
                incident =>
                incident.severity === filter
            )

    return (

        <div
            className="
            min-h-screen 
            bg-gradient-to-br
            from-blue-600
            via-cyan-400
            to-slate-300
            w-screen
            "
        >
            <Navbar user={user} />

            <h2
                className="
                    text-2xl
                    font-bold
                    text-white
                    mb-1
                    bg-black/30
                    backdrop-blur-md
                    p-4
                "
            >
                Live Surveillance Feed
            </h2>
            <h5
                className="
                    text-xl
                    text-white
                    mb-2
                    backdrop-blur-md
                    p-1
                ">Real-time monitoring using YOLOv8 object detection and automated alert generation.
            </h5>

            <div className="grid grid-cols-2 gap-6">
                <LiveCamera />
            </div>

           

            <h2
                className="
                    text-2xl
                    font-bold
                    text-white
                    mb-4
                    bg-black/30
                    backdrop-blur-md
                    p-4
                "
            >
                Analytics Overview
            </h2>

            <AnalyticsCards
                    incidents={incidents}
            />
          
            <div
                className="
                grid
                grid-cols-1
                lg:grid-cols-2
                gap-6
                mb-8
                "
                >

                <ObjectDetectionChart
                incidents={incidents}
                />

                <SeverityChart
                incidents={incidents}
                />

                </div>

            <h2
                className="
                    text-2xl
                    font-bold
                    text-white
                    mb-4
                    bg-black/30
                    backdrop-blur-md
                    p-4
                "
            >
                Incidents
            </h2>
            <div
                className="
                    flex
                    gap-3
                    mb-6
                    flex-wrap
                "
                >

                {
                    [
                    "All",
                    "Low",
                    "Medium",
                    "High"
                    ].map(level => (

                    <button
                        key={level}
                        onClick={() =>
                        setFilter(level)
                        }
                        className={`
                        px-4
                        py-2
                        rounded-full
                        font-medium
                        transition

                        ${
                            filter === level
                            ? "bg-blue-600 text-white"
                            : "bg-white text-gray-700"
                        }
                        `}
                    >

                        {level}

                    </button>

                    ))
                }

                </div>
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
                {
                    filteredIncidents.length === 0
                    ? (
                        <div className="flex text-center px-5 py-10">
                            No incidents found
                        </div>
                        )
                    : (
                        filteredIncidents.map(
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
                        )
                        )
                    }

                </div>
              </div>

         </div>

    )
}

export default Dashboard

import { useState } from "react"
import axios from "axios"

function IncidentForm({ refreshIncidents }) {

    const [title, setTitle] =
        useState("")

    const [description, setDescription] =
        useState("")
    const [image, setImage] =
    useState(null)

    const submitHandler =
        async (e) => {

            e.preventDefault()

            const token =
                localStorage.getItem("token")

           const formData = new FormData()

        formData.append("title", title)
        formData.append("description", description)
        formData.append("image", image)

        await axios.post(
        "http://localhost:5000/api/incidents",
        formData,
                {
                    headers: {
                        Authorization:
                            `Bearer ${token}`
                    }
                }
            )

            setTitle("")
            setDescription("")

            refreshIncidents()
        }

    return (

        <form
            onSubmit={submitHandler}
            className="
                bg-white
                shadow-md
                rounded-lg
                p-4
                mb-6
            "
        >

            <h2 className="font-bold mb-3">
                Create Incident
            </h2>

            <input
                value={title}
                onChange={(e) =>
                    setTitle(e.target.value)
                }
                placeholder="Title"
                className="
                    border
                    p-2
                    w-full
                    mb-3
                "
            />

            <textarea
                value={description}
                onChange={(e) =>
                    setDescription(e.target.value)
                }
                placeholder="Description"
                className="
                    border
                    p-2
                    w-full
                    mb-3
                "
            />

            <input
                type="file"
                onChange={(e) =>
                    setImage(e.target.files[0])
                }
                className="mb-2
                bg-slate-100
                text-black
                hover:bg-slate-200 transition
                px-2
                py-2
                rounded"
            />

            <button
                className="
                    bg-blue-500
                    text-white
                    hover:bg-blue-700 transition
                    px-4
                    py-2
                    rounded
                "
            >
                Create
            </button>

        </form>

    )
}

export default IncidentForm
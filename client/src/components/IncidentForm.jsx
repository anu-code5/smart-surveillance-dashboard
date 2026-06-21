import { useState, useRef } from "react"
import axios from "axios"
import API from "../services/api"


function IncidentForm({ refreshIncidents }) {

    const [title, setTitle] =
        useState("")

    const [description, setDescription] =
        useState("")
    const [image, setImage] =
        useState(null)
    const fileInputRef =
        useRef(null)

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
        "/incidents",
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
                ref={fileInputRef}
                id="image-upload"
                type="file"
                className="hidden"
                onChange={(e) =>
                    setImage(e.target.files[0])
                }
                
            />

            <label
                htmlFor="image-upload"
                className="
                    cursor-pointer
                    bg-slate-200
                    px-4
                    py-2
                    rounded
                    hover:bg-slate-300
                "
                >
                Choose Media
            </label>
            {
            image && (

                <div
                    className="
                        flex
                        items-center
                        gap-3
                        mt-3
                        px-3
                        py-2
                        rounded-lg
                    "
                >

                <span
                    className="
                    text-sm
                    text-gray-600
                    "
                >
                    {image.name}
                </span>

                 <button
                    type="button"
                    onClick={() => {

                    setImage(null)

                    fileInputRef.current.value =
                        ""

                    }}
                    className="
                    text-red-600
                    font-bold
                    bg-gray-100
                    px-2
                    py=1
                    text-lg
                    rounded
                    hover:bg-slate-300
                    "
                >
                    ✕
                </button>

                </div>

            )
            }
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
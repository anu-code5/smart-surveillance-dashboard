function IncidentCard({ incident }) {

    return (

        <div
            className="
                bg-white/70
                backdrop-blur-md
                rounded-3xl
                p-6
                shadow-xl
                hover:scale-[1.02]
                transition
            "
        >

        <span
            className={`
                mb-6
                mt-1
                inline-block
                px-3
                py-1
                rounded-full
                text-sm
                font-medium

                ${
                incident.severity === "High"
                ? "bg-red-100 text-red-700"

                : incident.severity ===
                    "Medium"
                ? "bg-yellow-100 text-yellow-700"

                : "bg-green-100 text-green-700"
                }
            `}
        >

            {incident.severity}

        </span>

        {
            incident.imageUrl && (

                <img
                src={
                    `http://localhost:5000${incident.imageUrl}`
                }
                alt="incident"
                className="
                    w-full
                    h-52
                    object-cover
                    rounded-xl
                    mb-4
                "
                />

            )
            }
            
            <h2 className="text-lg font-bold">
                {incident.title}
            </h2>

            <p className="text-gray-600">
                {incident.description}
            </p>
            {/* <p className="mt-2">
                Object:
                {" "}
                {incident.detectedObject}
                </p>

                <p>
                Confidence:
                {" "}
                {incident.confidence}
            </p> */}

            {
                <div className="mt-2">

            <h4
                className="
                font-semibold
                text-gray-700
                mb-1
                "
            >
                Detections
            </h4>

            <div className="space-y-1">

                {
                incident.detections?.map(
                    (
                    detection,
                    index
                    ) => (

                    <p
                        key={index}
                        className="
                        text-sm
                        text-gray-600
                        "
                    >
                        • {
                        detection.object
                        }
                        {" "}
                        (
                        {
                        (
                            detection.confidence *
                            100
                        ).toFixed(0)
                        }
                        %)
                    </p>

                    )
                )
                }

            </div>

            </div>
            }

            <p className="mt-2 text-sm">
                Logged by:
                {" "}
                {incident.createdBy?.name}
            </p>

            <p className="text-sm text-gray-500">
                {new Date(
                    incident.createdAt
                ).toLocaleString()}
            </p>

        </div>

    )
}

export default IncidentCard
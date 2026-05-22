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
            <p className="mt-2">
                Object:
                {" "}
                {incident.detectedObject}
                </p>

                <p>
                Confidence:
                {" "}
                {incident.confidence}
            </p>

            <p className="mt-2 text-sm">
                Logged by:
                {" "}
                {incident.createdBy?.name}
            </p>

        </div>

    )
}

export default IncidentCard
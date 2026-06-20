function AnalyticsCards({ incidents }) {

    const totalIncidents =
        incidents.length

    let totalPersons = 0

    let totalConfidence = 0

    let detectionCount = 0

    let highAlerts = 0

    incidents.forEach(
        incident => {

            if (
                incident.severity ===
                "High"
            ) {
                highAlerts++
            }

            incident.detections?.forEach(
                detection => {

                    if (
                        detection.object ===
                        "person"
                    ) {
                        totalPersons++
                    }

                    totalConfidence +=
                        detection.confidence

                    detectionCount++
                }
            )
        }
    )

    const avgConfidence =
        detectionCount > 0
        ? (
            totalConfidence /
            detectionCount
          ).toFixed(2)
        : 0

    const cards = [

        {
            title:
                "Total Incidents",

            value:
                totalIncidents
        },

        {
            title:
                "Persons Detected",

            value:
                totalPersons
        },

        {
            title:
                "Avg Confidence",

            value:
                `${(
                    avgConfidence * 100
                    ).toFixed(0)}%`
        },

        {
            title:
                "High Alerts",

            value:
                highAlerts
        }

    ]

    return (

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-4
            gap-4
            mb-8
          "
        >

            {
                cards.map(
                    card => (

                        <div
                          key={card.title}
                          className="
                            bg-white
                            rounded-2xl
                            shadow-md
                            p-6
                          "
                        >

                            <h3
                              className="
                                text-gray-500
                                text-sm
                              "
                            >
                                {card.title}
                            </h3>

                            <p
                              className="
                                text-3xl
                                font-bold
                                mt-2
                              "
                            >
                                {card.value}
                            </p>

                        </div>

                    )
                )
            }

        </div>

    )
}

export default AnalyticsCards
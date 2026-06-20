import {
    Legend,
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer

} from "recharts"

function ObjectDetectionChart({
    incidents
}) {

    const counts = {}

    incidents.forEach(
        incident => {

            incident.detections?.forEach(
                detection => {

                    counts[
                        detection.object
                    ] =
                    (
                        counts[
                            detection.object
                        ] || 0
                    ) + 1

                }
            )
        }
    )

    const data =
        Object.keys(counts).map(
            key => ({
                name: key,
                value: counts[key]
            })
        )

    const COLORS = [
        "#0088FE",
        "#00C49F",
        "#FFBB28",
        "#FF8042",
        "#A855F7"
    ]

    return (

        <div
          className="
            bg-white
            rounded-2xl
            shadow-md
            p-6
            mb-8
            h-full
          "
        >

            <h3
              className="
                text-xl
                font-bold
                mb-4
              "
            >
                Detection Distribution
            </h3>

            <ResponsiveContainer
                width="100%"
                height={200}
            >

                <PieChart>

                    <Pie
                        data={data}
                        dataKey="value"
                        nameKey="name"
                        outerRadius={80}
                    >

                        {
                            data.map(
                                (
                                  entry,
                                  index
                                ) => (

                                    <Cell
                                      key={
                                        index
                                      }
                                      fill={
                                        COLORS[
                                          index %
                                          COLORS.length
                                        ]
                                      }
                                    />

                                )
                            )
                        }

                    </Pie>
                    
                    <Legend />

                    <Tooltip
                    formatter={(value) =>
                        [`${value} detections`]
                    }
                    />

                </PieChart>

            </ResponsiveContainer>

        </div>

    )
}

export default ObjectDetectionChart
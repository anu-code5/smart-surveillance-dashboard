import {
  BarChart,
  Legend,
  Cell,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts"

function SeverityChart({
  incidents
}) {

  const counts = {
    Low: 0,
    Medium: 0,
    High: 0
  }

  incidents.forEach(
    incident => {

      counts[
        incident.severity
      ]++

    }
  )

  const data = [
    {
      severity: "Low",
      count: counts.Low
    },
    {
      severity: "Medium",
      count: counts.Medium
    },
    {
      severity: "High",
      count: counts.High
    }
  ]

  return (

    <div
      className="
        bg-white
        rounded-2xl
        shadow-md
        p-6
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
        Severity Distribution
      </h3>

      <ResponsiveContainer
        width="100%"
        height={200}
      >

        <BarChart
          data={data}
        >

          <XAxis
            dataKey="severity"
          />

          <YAxis />

          <Legend />

          <Tooltip />

          <Bar
            dataKey="count"
            radius={[8,8,0,0]}
            >
            <Cell fill="#22c55e" />
            <Cell fill="#eab308" />
            <Cell fill="#ef4444" />
          </Bar>

        </BarChart>

      </ResponsiveContainer>

    </div>

  )
}

export default SeverityChart
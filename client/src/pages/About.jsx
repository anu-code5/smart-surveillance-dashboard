function About() {

  return (

    <div className="max-w-6xl mx-auto px-6 py-10">

      <h1 className="text-4xl font-bold mb-4">
        AI-Powered Surveillance Dashboard
      </h1>

      <p className="text-gray-600 mb-10">
        A full-stack surveillance monitoring platform that combines
        live camera monitoring, AI-powered object detection,
        incident management, and analytics dashboards to assist
        in security monitoring and threat assessment.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-12">

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-bold text-lg mb-2">
            🎥 Live Monitoring
          </h2>

          <p>
            Monitor camera feeds and capture frames for analysis.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-bold text-lg mb-2">
            🤖 AI Detection
          </h2>

          <p>
            YOLOv8-based object detection for identifying
            people and objects.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-bold text-lg mb-2">
            🚨 Alert Classification
          </h2>

          <p>
            Incidents are categorized into Low,
            Medium, and High severity.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-bold text-lg mb-2">
            📋 Incident Management
          </h2>

          <p>
            Store and review incidents with images
            and AI analysis.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-bold text-lg mb-2">
            📊 Analytics
          </h2>

          <p>
            Visualize trends, detections,
            and alert distributions.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-bold text-lg mb-2">
            🔐 Secure Access
          </h2>

          <p>
            JWT authentication protects
            surveillance data.
          </p>
        </div>

      </div>

      <div className="bg-white p-6 rounded-xl shadow mb-8">

        <h2 className="text-2xl font-bold mb-4">
          Architecture
        </h2>

        <pre className="text-gray-700 whitespace-pre-wrap">
{`
React + Tailwind
        ↓
Node.js + Express
        ↓
MongoDB Atlas

        ↘

   Flask AI Service
      (YOLOv8)
`}
        </pre>

      </div>

      <div className="bg-white p-6 rounded-xl shadow">

        <h2 className="text-2xl font-bold mb-4">
          Technology Stack
        </h2>

        <ul className="space-y-2">

          <li>
            Frontend: React, Tailwind CSS, Axios, Recharts
          </li>

          <li>
            Backend: Node.js, Express.js, JWT, Multer
          </li>

          <li>
            Database: MongoDB Atlas
          </li>

          <li>
            AI: Flask, YOLOv8, OpenCV
          </li>

          <li>
            Deployment: Vercel, Render
          </li>

        </ul>

      </div>

    </div>

  <div className="mt-8 bg-yellow-50 border border-yellow-300 p-4 rounded-xl">

  <h3 className="font-bold mb-2">
    Deployment Note
  </h3>

  <p>
    The deployed demo uses free cloud hosting services.
    AI-powered object detection may experience increased
    latency due to resource limitations of free-tier
    infrastructure.
  </p>

</div>

  )
}

export default About

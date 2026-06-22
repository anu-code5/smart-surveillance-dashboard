import Webcam from "react-webcam"
import { useRef, useState, useEffect } from "react"
import axios from "axios"


function LiveCamera() {

  const webcamRef = useRef(null)

  const [capturedImage,
         setCapturedImage] = useState(null)

  const [detections, setDetections] =
         useState([])

  const [loading, setLoading] =
         useState(false)
  const [monitoring,
       setMonitoring] =
       useState(false)
  const [lastScan, setLastScan] =
    useState(null)

    const captureFrame = () => {

    const imageSrc =
        webcamRef.current?.getScreenshot()
         console.log("Captured:", imageSrc)

        setCapturedImage(imageSrc)

    return imageSrc
    }

  const capture = () => {

    const image =
        captureFrame()

    setCapturedImage(image)
}
  
  const dataURLtoFile = (
    dataurl,
    filename
    ) => {

    const arr =
        dataurl.split(",")

    const mime =
        arr[0].match(
        /:(.*?);/
        )[1]

    const bstr =
        atob(arr[1])

    let n = bstr.length

    const u8arr =
        new Uint8Array(n)

    while (n--) {

        u8arr[n] =
        bstr.charCodeAt(n)

    }

    return new File(
        [u8arr],
        filename,
        {
        type: mime
        }
    )
    }

    useEffect(() => {

    if (!monitoring)
        return

    const interval =
        setInterval(async () => {

        const image =
            captureFrame()

        if (!image)
            return

        await analyzeFrame(image)

        }, 5000)

    return () =>
        clearInterval(interval)

    }, [monitoring])

    const analyzeFrame =
    async (
        imageData = capturedImage
    ) => {

    console.log(
        "Analyze called",
        imageData
    )

    try {

        setLoading(true)

        const file =
            dataURLtoFile(
                imageData,
                "frame.jpg"
            )

        const formData =
            new FormData()

        formData.append(
            "image",
            file
        )

        const res =
            await axios.post(
                "http://127.0.0.1:8000/detect",
                formData,
                {
                    headers: {
                        "Content-Type":
                        "multipart/form-data"
                    }
                }
            )

        setDetections(
            res.data
        )
        setLastScan(
            new Date()
        
        )

    } catch (err) {

        console.error(err)

    } finally {

        setLoading(false)

    }
}    
    const personCount =
    detections.filter(
        item =>
        item.object === "person"
    ).length

    let severity = "None"

    if (personCount >= 3)
    severity = "High"

    else if (personCount >= 2)
    severity = "Medium"

    else if (personCount >= 1)
    severity = "Low"
  

return (

<div>
    <div className="grid grid-cols-4 gap-2 w-screen">

    {/* LEFT SIDE */}

    <div className="bg-white p-4 rounded-xl shadow mb-2">

      <h2 className="font-bold mb-3">
        Live Camera Feed
      </h2>

      <Webcam
        ref={webcamRef}
        audio={false}
        screenshotFormat="image/jpeg"
        width="100%"
        className="rounded-lg"
      />
      <div
        className={`
            px-60
            py-2
            rounded-lg
            text-white
            font-semibold
        `}
        >
        {
            monitoring
            ? "🟢" 
            : "🔴"
        }
        </div>

      <div className="flex gap-3 mt-4">

        <button
          onClick={capture}
          className="
            bg-green-500
            text-white
            px-3 py-2
            rounded
            hover:bg-green-600
          "
        >
          Capture
        </button>

        <button
          onClick={() => analyzeFrame()} 
          disabled={!capturedImage || loading}
          className="
            bg-yellow-500
            text-white
            px-3 py-2
            rounded
            hover:bg-yellow-600
          "
        >
          {
            loading
              ? "Analyzing..."
              : "Analyze Frame"
          }
        </button>

        <button
        onClick={() =>
            setMonitoring(
            !monitoring
            )
        }
        className={`
            px-3
            py-2
            rounded
            text-white
            hover:bg-slate-400
            ${
            monitoring
            ? "bg-red-500"
            : "bg-blue-500"
            }
        `}
        >

        {
            monitoring
            ? "Stop Monitoring"
            : "Start Monitoring"
        }

        </button>

      </div>

    </div>

    {/* RIGHT SIDE */}

    <div className="bg-white p-4 rounded-xl shadow mb-2">

      <h2 className="font-bold mb-3">
        Captured Frame
      </h2>

      {
        capturedImage ? (

          <img
            src={capturedImage}
            alt="captured"
            className="
              w-full
              rounded-lg
            "
          />

        ) : (

          <div
            className="
              h-72
              flex
              items-center
              justify-center
              text-gray-500
              border-2
              border-dashed
              rounded-lg
            "
          >

            No frame captured yet

          </div>

        )
      }

    </div>

  {/* DETECTIONS */}

  <div className="bg-white p-4 rounded-xl shadow mb-2 ">

  <h2 className="font-bold mb-3">
    Detection Results
  </h2>
  

  {
    Array.isArray(detections) &&
    detections.length > 0 ? (

      <div className="space-y-3">

        {
          detections.map(
            (item, index) => (

              <div
                key={index}
                className="
                  bg-gray-100
                  p-3
                  rounded-lg
                "
              >

                <p className="font-semibold capitalize">
                {item.object}
                </p>

                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{
                    width: `${item.confidence * 100}%`
                    }}
                />
                </div>

                <p className="text-sm mt-1">
                {(item.confidence * 100).toFixed(0)}%
                </p>

              </div>

            )
          )
        }
        {
        lastScan && (

            <p className="
            text-sm
            text-gray-500
            mb-3
            ">
            Last Scan:
            {" "}
            {
                lastScan.toLocaleString()
            }
            </p>

        )
        }

      </div>

    ) : (

      <div
        className="
          h-72
          flex
          items-center
          justify-center
          text-gray-500
          border-2
          border-dashed
          rounded-lg
        "
      >
        No detections yet
      </div>

    )
  }

</div>

{/*alert card*/}

<div className="bg-white p-4 mb-2 rounded-xl shadow">

  <h2 className="font-bold mb-3">
    Alert Status
  </h2>

  {
    severity === "None"
      ? (
        <div
        className="
          h-72
          flex
          items-center
          justify-center
          text-gray-500
          border-2
          border-dashed
          rounded-lg
        "
      >
        No alerts yet
      </div>
      )
      : (
        <>
          <p>
            Persons Detected:
            {" "}
            {personCount}
          </p>

          <div
            className={`
              mt-4
              px-4
              py-2
              rounded-lg
              text-white
              font-semibold
              ${
                severity === "High"
                  ? "bg-red-500"
                  : severity === "Medium"
                  ? "bg-yellow-500"
                  : "bg-green-500"
              }
            `}
          >
            {severity} Alert
          </div>
        </>
      )
  }

</div>

</div>

</div>

)

}

export default LiveCamera
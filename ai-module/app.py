from flask import Flask, request, jsonify
from ultralytics import YOLO
import os

app = Flask(__name__)

model = YOLO("yolov8n.pt")

@app.route("/")
def home():
    return {"message": "AI Service Running"}

@app.route("/detect", methods=["POST"])
def detect():

    if "image" not in request.files:
        return jsonify({
            "error": "No image uploaded"
        }), 400

    image = request.files["image"]

    image_path = image.filename

    image.save(image_path)

    results = model(image_path)

    detections = []

    for result in results:

        for box in result.boxes:

            cls = int(box.cls)
            conf = float(box.conf)

            detections.append({
                "object": model.names[cls],
                "confidence": round(conf, 2)
            })

    os.remove(image_path)

    return jsonify(detections)

if __name__ == "__main__":
    app.run(port=8000)
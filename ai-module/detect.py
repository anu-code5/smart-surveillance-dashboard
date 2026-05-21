from ultralytics import YOLO

model = YOLO("yolov8n.pt")

results = model("test.jpg")

for result in results:
    for box in result.boxes:
        cls = int(box.cls)
        conf = float(box.conf)

        print(
            f"{model.names[cls]} "
            f"({conf:.2f})"
        )
# Smart Surveillance Monitoring System

An intelligent surveillance dashboard that combines live camera monitoring, AI-powered object detection, incident management, and analytics to assist in security monitoring and threat assessment.

## Live Demo

Frontend: https://smart-surveillance-dashboard.vercel.app

Backend API: https://smart-surveillance-dashboard.onrender.com

AI Service: https://smart-surveillance-ai.onrender.com

## Features

### Live Surveillance Monitoring

* Real-time webcam feed integration
* Frame capture functionality
* Continuous monitoring mode
* Visual monitoring status indicator

### AI Object Detection

* YOLOv8-powered object detection
* Person and object identification
* Detection confidence scores
* Real-time analysis results

### Incident Management

* Create and manage incidents
* Upload incident images
* Automatic AI analysis on uploaded media
* Severity classification (Low, Medium, High)
* Incident history tracking

### Analytics Dashboard

* Total incidents overview
* Person detection statistics
* Average confidence metrics
* Alert distribution charts
* Detection trend visualization

### Security

* JWT Authentication
* Protected routes
* User-specific incident logging

---

## System Architecture

Frontend (React + Tailwind CSS)
↓
Backend API (Node.js + Express)
↓
MongoDB Atlas

AI Service (Flask + YOLOv8)

---

## Technology Stack

### Frontend

* React
* React Router
* Tailwind CSS
* Axios
* Recharts
* React Webcam

### Backend

* Node.js
* Express.js
* JWT Authentication
* Multer

### Database

* MongoDB Atlas
* Mongoose

### AI Service

* Flask
* YOLOv8
* OpenCV
* Ultralytics

### Deployment

* Vercel (Frontend)
* Render (Backend)
* Render (AI Service)

---

## Screenshots

### Dashboard

<img width="960" height="540" alt="image" src="https://github.com/user-attachments/assets/b3e259c6-282e-4f4c-bdee-32874ec811be" />


### Live Monitoring

<img width="960" height="540" alt="image" src="https://github.com/user-attachments/assets/7364bf09-3166-41d6-b16e-b0146a57b31c" />


### Incident Management

<img width="959" height="539" alt="image" src="https://github.com/user-attachments/assets/00c8ad7d-d28b-4bd9-ad91-c40c9a969202" />

<img width="959" height="539" alt="image" src="https://github.com/user-attachments/assets/61ac93cd-8a09-462d-a239-8e05e3f1303f" />


### Analytics Dashboard

<img width="960" height="540" alt="image" src="https://github.com/user-attachments/assets/3f687eb2-46e2-476b-a226-0a7e14ed8204" />


---

## Installation

### Clone Repository

```bash
git clone <repository-url>
cd smart-surveillance-dashboard
```

### Frontend

```bash
cd client
npm install
npm run dev
```

### Backend

```bash
cd server
npm install
npm start
```

### AI Service

```bash
cd ai-service
pip install -r requirements.txt
python app.py
```

---

## Environment Variables

### Backend (.env)

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## API Endpoints

### Authentication

* POST /api/auth/register
* POST /api/auth/login

### Incidents

* GET /api/incidents
* POST /api/incidents

### AI Detection

* POST /detect

---

## Current Limitations

* AI inference latency may be noticeable on free-tier cloud deployments.
* Continuous monitoring performance depends on available hosting resources.
* Object detection accuracy depends on image quality and lighting conditions.

---

## Future Enhancements

* Real-time CCTV/IP camera integration
* Multi-camera monitoring
* Email/SMS alert notifications
* Face recognition support
* Object tracking
* Role-based access control
* Detection history analytics

---

## Author

Anushka Chaudhary

B.Tech Electronics and Computer Engineering, VIT Chennai

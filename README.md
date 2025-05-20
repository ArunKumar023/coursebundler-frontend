# 🎓 CourseBundler - MERN Stack Course Management App

CourseBundler is a full-featured **MERN stack** application for online course management. It includes both **User** and **Admin Dashboards**, **secure payment integration with Razorpay**, and **image hosting with Cloudinary**.

---

## 🔧 Tech Stack

- **Frontend:** React, Redux Toolkit, Tailwind CSS
- **Backend:** Node.js, Express.js, MongoDB (Mongoose)
- **Payment Gateway:** Razorpay
- **Image Uploads:** Cloudinary
- **Authentication:** JWT (JSON Web Tokens)
- **State Management:** Redux Toolkit

---

## 🌐 Features

### 👨‍🎓 User Panel:

- Register and Login with JWT Authentication
- Browse available courses
- Enroll in courses via **Razorpay**
- View enrolled courses
- Secure dashboard with profile and settings

### 🛠️ Admin Panel:

- Create, update, and delete courses
- Upload course thumbnails using **Cloudinary**
- Manage all users (view, update role, delete)
- View total revenue, payment stats, and analytics
- Handle course enrollment requests
- Dashboard analytics & performance

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
// Backend
git clone https://github.com/ArunKumar023/Coursebundler
cd coursebundler

// Fronted
git clone https://github.com/ArunKumar023/coursebundler-frontend
cd coursebundler-frontend

## Install Dependencies

# For Backend
cd coursebundler
npm install

# For Fronted
cd coursebundler-frontend
npm install


## Configure Environment Variables
Create a .env file inside the server/ directory with the following content:

# Razorpay
RAZORPAY_API_KEY=your_razorpay_api_key
RAZORPAY_API_SECRET=your_razorpay_api_secret

# Cloudinary
CLOUDINARY_CLIENT_NAME=your_cloud_name
CLOUDINARY_CLIENT_API=your_cloudinary_api_key
CLOUDINARY_CLIENT_SECRET=your_cloudinary_api_secret

# MongoDB
MONGO_URI=mongodb://127.0.0.1:27017/your-db-name

# JWT
JWT_SECRET=your_jwt_secret

# Frontend
FRONTEND_URL=http://localhost:3000

# Port
PORT=4000


** Important: Never push .env files to GitHub. Always include .env in .gitignore. **

 ##Run the App Locally

 # Start backend
cd coursebundler
npm run dev

# For Fronted

# Start frontend
cd coursebundler-frontend
npm start

Frontend: http://localhost:3000

Backend: http://localhost:4000


Demo Credentials (Optional for Testing)

Admin Email: admin@coursebundler.com
Password: admin123
```

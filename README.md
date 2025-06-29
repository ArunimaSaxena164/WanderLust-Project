# 🌍 Wanderlust

A full-stack travel listing web application that allows users to create, view, edit, and delete travel destinations, as well as review and rate them. Built using the **MVC architecture** with **Node.js**, **Express**, **MongoDB**, and **EJS**, this platform mimics core functionalities of travel listing services.

---

## 🚀 Live Demo

🔗 [Wanderlust Live on Render](https://wanderlust-project-6ge6.onrender.com/listings)

---

## 🛠 Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: EJS Templates, Bootstrap 5
- **Database**: MongoDB Atlas, Mongoose
- **Authentication**: Passport.js, passport-local-mongoose
- **Sessions**: Express-session, connect-mongo
- **Image Hosting**: Cloudinary
- **Rating System**: Starability CSS library
- **Deployment**: Render

---

## 📦 Features

- 📝 **CRUD operations** for travel listings (Create, Read, Update, Delete)
- 🔐 **User authentication** (Register/Login/Logout) using Passport.js
- ✍️ Logged-in users can **review listings** and **rate** them with stars
- 🧼 **Authorization checks**: Only the listing owner can edit or delete their content
- 🖼  Image upload using Multer and Cloudinary
- 🔄 **Flash messages** for user actions (success/error)
- 🧱 Built using **MVC pattern** for clean code organization

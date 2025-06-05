InsightSphere - Full-Stack Blog Application ✍️
-------------------------------------------------
An intuitive blogging platform built with the MERN stack
--------------------------------------------------------------------------
Table of Contents:

-About The Project
-Features
-Demo
-Technologies Used
-Installation
-Usage
-API Endpoints
-Project Structure
-Screenshots
-Future Enhancements
-License
-------------------------------------------------------------------------------------------------------
About The Project
InsightSphere is a modern blogging platform designed to allow users to create, read, and engage with blog content effortlessly. Built with React on the frontend and Express.js with MongoDB on the backend, InsightSphere offers secure user authentication, blog post management, real-time likes, view tracking, comments, and a personalized "Read Later" feature.

The application focuses on a clean, responsive UI and efficient backend services, aiming to provide a seamless blogging experience for content creators and readers alike.
-------------------------------------------------------------------------------------------------------
Features
🔐 User Authentication: Secure signup and login using JWT and hashed passwords (bcrypt).

✍️ Create and Upload Blogs with Admin Secret: Only Admins can create blog posts with rich text content and upload images.

❤️ Like System: Users can like blog posts uniquely (one like per user per blog).

👁️ View Count: Each blog post tracks how many times it has been viewed.

📱 Responsive Design: Works smoothly on mobile, tablet, and desktop.

🌙 Light Dark Toggle Functionality.

🔄 Smooth Navigation: React Router used for fast, client-side navigation.

🛠️ File Uploads: Multer handles image uploads securely on the backend.
---------------------------------------------------------------------------------------
Demo
Homepage and Blog Feed

![image](https://github.com/user-attachments/assets/d1d77098-1125-4223-a454-9a2082cb7df1)

Blog Detail with Views and Likes

![image](https://github.com/user-attachments/assets/03132397-d4df-468a-8097-cc4aa5988e13)

Responsive Mobile View

![image](https://github.com/user-attachments/assets/cbabb6b2-5028-4046-93f6-42276d0a8e15)

Light Dark Toggle

![image](https://github.com/user-attachments/assets/06267b8b-1149-4709-bd7c-24aedf2927f9)

![image](https://github.com/user-attachments/assets/99454d92-a6bb-4c27-b7c0-2c6851103c33)

----------------------------------------------------------------------
Technologies Used:

Layer	Technology
Frontend	React.js, React Router, Bootstrap, React Icons
Backend	Node.js, Express.js, JWT Authentication, Multer (file uploads)
Database	MongoDB, Mongoose
Authentication	JWT (JSON Web Tokens), bcryptjs for hashing passwords
Styling	CSS3, Bootstrap
---------------------------------------------------------------------------------
Installation
Prerequisites
Node.js installed (v16+ recommended)

MongoDB installed or MongoDB Atlas account for cloud DB

Steps
Clone the repository
--------
bash
Copy
Edit
git clone https://github.com/yourusername/insightsphere.git
cd insightsphere
Backend setup
---------
bash
Copy
Edit
cd backend
npm install
# Create a `.env` file to store secret keys (optional but recommended)
npm start
Frontend setup
-----------
bash
Copy
Edit
cd ../frontend
npm install
npm start
Open your browser and visit:
-----------
arduino
Copy
Edit
http://localhost:3000
--------------------------------------------------------------

Usage
Signup or login to start creating and interacting with blogs.

Navigate through the blog feed, click on any blog to read more.

Like blogs.

Upload your own blogs with images via the upload page.

API Endpoints
Endpoint	Method	Description
/signup	POST	Register a new user
/login	POST	Login and receive JWT token
/uploadBlog	POST	Upload a new blog with image
/getBlogs	POST	Get all blogs
/getBlog	POST	Get single blog and increment views
/likeBlog	POST	Like a blog post (unique per user)
-------------------------------------------------------------------
Project Structure
-----------------
insightsphere/
│
├── backend/                # Express backend source
│   ├── models/             # Mongoose models (User, Blog, Comments)
│   ├── routes/             # API routes (auth, blogs, comments)
│   ├── uploads/            # Uploaded images folder
│   ├── index.js            # Server entry point
│   └── ...
│
├── frontend/               # React frontend source
│   ├── src/
│   │   ├── components/     # Reusable UI components (Navbar, BlogCard etc)
│   │   ├── pages/          # Route pages (Home, Login, Signup, BlogDetail etc)
│   │   ├── App.js          # React main app component
│   │   └── ...
│   └── public/
│
└── README.md               # Project documentation
-------------------------------------------------------------------------
Future Enhancements
User profile editing with avatar uploads.

Edit and delete own blogs.

Notifications for new likes and comments.

Advanced search and filtering of blogs.

Admin dashboard for moderation.

Real-time updates with WebSockets.
--------------------------------------------------------
License
This project is licensed under the MIT License - see the LICENSE file for details.

Contact
Created by Your Name - Jasleen Kaur
GitHub: jas04-11

---------------------------------------------------------------------------------------------


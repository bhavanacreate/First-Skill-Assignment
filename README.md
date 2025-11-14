# FirstSkillAssignment

A Netflix-style streaming dashboard built with React + TypeScript, Express.js, and TMDB API.
This project includes a homepage with categorized movie rows, a hero banner, and a dynamic movie details page.

Fully deployed using:

Frontend: Vercel

Backend: Render

🚀 Live Demo
🔹 Frontend (Vercel)

👉 https://first-skill-assignment.vercel.app/

🔹 Backend API (Render)

👉 https://firstskillassignment.onrender.com/api/popular

(Example endpoint)

🛠️ Tech Stack
Frontend

React (TypeScript)

React Router DOM

Axios

Tailwind CSS

TMDB image CDN

Backend

Express.js

Axios

CORS

dotenv (API key security)

Deployment

Vercel (frontend)

Render (backend)

📁 Project Structure
streaming-dashboard/
│
├── backend/
│   ├── controllers/
│   │     └── movieController.js
│   ├── routes/
│   │     └── movies.js
│   ├── server.js
│   ├── .env  (not committed)
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── api/movieApi.ts
    │   ├── components/
    │   │     ├── Header.tsx
    │   │     ├── HeroBanner.tsx
    │   │     ├── MovieCard.tsx
    │   │     └── MovieRow.tsx
    │   ├── pages/
    │   │     ├── Home.tsx
    │   │     └── MovieDetails.tsx
    │   ├── types/Movie.ts
    │   ├── index.css
    │   └── main.tsx / index.tsx
    │
    ├── public/
    ├── tailwind.config.js
    ├── postcss.config.js
    ├── package.json
    └── README.md

🎯 Features
🔥 Homepage

Hero Banner (from first popular movie)

Popular Movies Row

Top Rated Movies Row

Now Playing Movies Row

Smooth horizontal scrolling

Fully responsive Netflix-style UI

🔥 Movie Details Page

Dynamic route: /movie/:id

Large backdrop poster

Title, overview, release date, rating

Clean responsive layout

🔥 Secure Backend

API key hidden in .env (never exposed to frontend)

Express server proxies requests to TMDB

Endpoints:

GET /api/popular
GET /api/top-rated
GET /api/now-playing
GET /api/movie/:id

⚙️ Setup Instructions
🟦 1) Clone Repo
git clone https://github.com/Surya-9177/FirstSkillAssignment.git
cd FirstSkillAssignment

🟩 Backend Setup (Express)
cd backend
npm install


Create .env:

TMDB_API_KEY=your_tmdb_key
PORT=5000


Start server:

npm start


Backend runs at:

http://localhost:5000

🟩 Frontend Setup (React)
cd ../frontend
npm install
npm start


Frontend runs at:

http://localhost:3000

🔥 Environment Variable (Frontend)

Create:

REACT_APP_API_URL=https://firstskillassignment.onrender.com/api


Used inside movieApi.ts:

const API = process.env.REACT_APP_API_URL;

🚀 Deployment
🟩 Backend (Render)

Add Environment Variable: TMDB_API_KEY

Build: npm install

Start: node server.js

Live:

https://firstskillassignment.onrender.com/

🟩 Frontend (Vercel)

Root Directory: frontend

Build Command: npm run build

Output Directory: build

Environment:

REACT_APP_API_URL=https://firstskillassignment.onrender.com/api

Live:

https://first-skill-assignment.vercel.app/

👨‍💻 Developer

Surya Nagularapu
GitHub: https://github.com/Surya-9177

Project: FirstSkillAssignment

🎉 Thanks for checking out this project!

Let me know if you want:

☑ Resume text
☑ LinkedIn project description
☑ Portfolio section content

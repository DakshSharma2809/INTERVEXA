# 🚀 INTERVEXA

### AI-Powered Interview Preparation & Career Platform

INTERVEXA is an AI-powered career preparation platform designed to help students and job seekers prepare for technical and HR interviews, build ATS-friendly resumes, analyze interview performance, and create personalized career roadmaps.

The platform combines **Artificial Intelligence, Machine Learning, Large Language Models, React, Node.js, MongoDB, Redis, and microservices** to provide an interactive end-to-end interview preparation experience.

---

## ✨ Features

### 🎤 AI Mock Interviews

* Technical and HR interview modes
* AI-generated interview questions
* Interactive interview experience
* Real-time interview flow
* Interview timer
* Coding-based interview questions
* AI-powered interview evaluation
* Detailed interview reports

### 📄 AI Resume Builder

* Create professional resumes
* Structured resume sections
* ATS-friendly resume templates
* Resume preview
* Resume download
* Resume data management
* AI-assisted resume generation

### 🗺️ AI Career Roadmap

Generate personalized learning roadmaps based on:

* Career goals
* Skills
* Experience
* Technology preferences
* Learning requirements

Roadmaps are organized into modules and learning steps.

### 📊 Interview Analytics

The platform provides interview insights such as:

* Overall performance
* Technical performance
* HR performance
* Strengths
* Areas for improvement
* Interview feedback
* Performance reports

### 🔐 Authentication

* User authentication
* JWT-based authentication
* Protected routes
* Secure user sessions

### ⚡ Performance & Caching

Redis is used for caching and improving backend performance where required.

---

# 🏗️ System Architecture

INTERVEXA follows a **microservice-based backend architecture**.

```text
                    ┌─────────────────────┐
                    │      INTERVEXA      │
                    │    React Frontend   │
                    └──────────┬──────────┘
                               │
                               │ REST APIs
                               ▼
             ┌─────────────────────────────────┐
             │          Backend Services       │
             └─────────────────────────────────┘
                    │        │        │
          ┌─────────┘        │        └─────────┐
          ▼                  ▼                  ▼
    User Service       Resume Service     Interview Service
          │                  │                  │
          │                  │                  │
          └──────────────────┼──────────────────┘
                             │
                             ▼
                       Roadmap Service
                             │
                    ┌────────┴────────┐
                    ▼                 ▼
                 MongoDB            Redis
                    │
                    ▼
              AI / LLM Services
```

---

# 🛠️ Tech Stack

## Frontend

* React.js
* Vite
* JavaScript
* CSS
* Axios
* Redux

## Backend

* Node.js
* Express.js
* JavaScript
* REST APIs
* Microservices Architecture

## Database

* MongoDB
* Mongoose

## Caching

* Redis

## Artificial Intelligence

* Large Language Models
* LangChain
* OpenAI API
* AI-based interview generation
* AI-based interview analysis
* AI-powered roadmap generation

## Authentication

* JWT
* Firebase Authentication

## Deployment

* Vercel for frontend deployment
* Backend services can be deployed independently

---

# 📁 Project Structure

```text
INTERVEXA/
│
├── backend/
│   │
│   └── services/
│       ├── user/
│       ├── resume/
│       ├── interview/
│       └── roadmap/
│
├── frontend/
│   │
│   ├── public/
│   ├── src/
│   │   ├── apis/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── interview/
│   │   │   ├── resume/
│   │   │   └── roadmap/
│   │   ├── pages/
│   │   ├── redux/
│   │   └── utils/
│   │
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
│
├── .gitignore
└── README.md
```

---

# 🚀 Getting Started

## 1. Clone the Repository

```bash
git clone https://github.com/DakshSharma2809/INTERVEXA.git
```

Navigate into the project:

```bash
cd INTERVEXA
```

---

# 💻 Frontend Setup

Navigate to the frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend will normally be available at:

```text
http://localhost:5173
```

---

# ⚙️ Backend Setup

Navigate to the required backend service.

Example:

```bash
cd backend/services/interview
```

Install dependencies:

```bash
npm install
```

Start the service:

```bash
node index.js
```

Repeat the process for the other backend services.

---

# 🔐 Environment Variables

Create `.env` files for the required services.

Example:

```env
PORT=8000

MONGO_URI=your_mongodb_connection_string

REDIS_URL=your_redis_connection_string

JWT_SECRET=your_jwt_secret

OPENAI_API_KEY=your_openai_api_key
```

For Firebase authentication, configure the required Firebase environment variables according to your frontend configuration.

> ⚠️ Never commit `.env` files, API keys, database credentials, service-account files, or other secrets to GitHub.

---

# 🤖 AI Workflow

INTERVEXA uses AI throughout the career preparation process.

### Interview Generation

```text
User Profile
     ↓
Interview Configuration
     ↓
Interview Prompt
     ↓
LLM
     ↓
Generated Questions
     ↓
Interactive Interview
```

### Interview Analysis

```text
Interview Responses
        ↓
AI Analysis
        ↓
Performance Evaluation
        ↓
Strengths & Weaknesses
        ↓
Interview Report
```

### Career Roadmap

```text
User Skills
     +
Career Goal
     +
Experience
     ↓
AI Processing
     ↓
Personalized Roadmap
     ↓
Learning Modules
     ↓
Recommended Preparation Path
```

---

# 📌 Core Modules

| Module           | Purpose                               |
| ---------------- | ------------------------------------- |
| Authentication   | User login and authentication         |
| Dashboard        | User overview and statistics          |
| Interview        | AI-powered mock interviews            |
| Resume Builder   | Create ATS-friendly resumes           |
| Interview Report | Analyze interview performance         |
| Roadmap          | Generate personalized career roadmaps |
| Scorer           | Evaluate performance                  |
| Billing          | Manage pricing/subscription interface |

---

# 🔄 Application Flow

```text
                    USER
                     │
                     ▼
               Authentication
                     │
                     ▼
                 Dashboard
                     │
          ┌──────────┼──────────┐
          │          │          │
          ▼          ▼          ▼
      Interview    Resume     Roadmap
          │          │          │
          ▼          ▼          ▼
        AI/LLM      Resume      AI/LLM
          │        Builder        │
          ▼          │            ▼
      Evaluation     ▼       Learning Plan
          │       Download
          ▼
    Interview Report
```

---

# 🎯 Project Goals

INTERVEXA aims to provide a single platform where users can:

* Prepare for technical interviews
* Practice HR interviews
* Generate personalized interview questions
* Analyze interview performance
* Build ATS-friendly resumes
* Identify skill gaps
* Generate personalized career roadmaps
* Improve interview readiness using AI

---

# 🔮 Future Improvements

Possible future enhancements include:

* Voice-based AI interviews
* Real-time speech analysis
* Advanced resume scoring
* Job-description-based resume optimization
* Personalized job recommendations
* More programming languages for coding interviews
* Advanced interview analytics
* AI-powered skill-gap detection
* More detailed career recommendations
* Production-grade monitoring and observability

---

# 🌐 Deployment

The frontend can be deployed using **Vercel**.

For the current monorepo structure:

```text
INTERVEXA/
├── backend/
└── frontend/
```

Set the Vercel **Root Directory** to:

```text
frontend
```

Build command:

```bash
npm run build
```

Output directory:

```text
dist
```

Backend services should be deployed separately or adapted for a serverless deployment architecture.

---

# 🔒 Security

The project uses environment variables for sensitive configuration.

Make sure the following are never committed:

```text
.env
.env.local
API keys
JWT secrets
MongoDB credentials
Redis credentials
Google service-account credentials
```

---

# 👨‍💻 Author

**Daksh Sharma**

Computer Science Engineering Student
AI/ML • Data Science • Full-Stack Development

GitHub: [DakshSharma2809](https://github.com/DakshSharma2809)

---

# ⭐ Support

If you find INTERVEXA useful, consider giving the repository a ⭐ on GitHub.

---

## 📜 License

This project is intended for educational and development purposes.

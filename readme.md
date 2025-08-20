# Project File Structure :
## 
caps-ai/
│── 📄 package.json
│── 📄 README.md
│── 📄 .gitignore
│── 📄 .env (environment variables: DB_URI, API_KEYS, JWT_SECRET, etc.)
│
├── client/   (Frontend - React + Vite/CRA + Tailwind + shadcn/ui)
│   ├── 📄 package.json
│   ├── public/
│   │   ├── index.html
│   │   └── logo.png
│   │
│   └── src/
│       ├── main.jsx
│       ├── App.jsx
│       ├── index.css
│       │
│       ├── assets/         (static images, icons, fonts)
│       ├── components/     (reusable UI parts)
│       │   ├── Navbar.jsx
│       │   ├── Sidebar.jsx
│       │   ├── Chart.jsx
│       │   ├── Button.jsx
│       │   └── Loader.jsx
│       │
│       ├── pages/          (main views)
│       │   ├── Dashboard.jsx
│       │   ├── ResumeUpload.jsx
│       │   ├── Insights.jsx
│       │   ├── Companies.jsx
│       │   ├── History.jsx
│       │   ├── Profile.jsx
│       │   └── Pricing.jsx
│       │
│       ├── context/        (React Context API)
│       │   └── AuthContext.jsx
│       │
│       ├── hooks/          (custom hooks)
│       │   └── useAuth.js
│       │
│       ├── utils/          (helpers)
│       │   └── api.js
│       │
│       └── services/       (API integration with backend)
│           └── authService.js
│
├── server/   (Backend - Node.js + Express + MongoDB + AI/ML APIs)
│   ├── 📄 package.json
│   ├── src/
│   │   ├── index.js        (server entry point)
│   │   ├── config/         (DB + cloud storage + AI config)
│   │   │   ├── db.js
│   │   │   └── cloudinary.js
│   │   │
│   │   ├── models/         (MongoDB models)
│   │   │   ├── User.js
│   │   │   ├── Resume.js
│   │   │   ├── Analysis.js
│   │   │   └── Company.js
│   │   │
│   │   ├── routes/         (API endpoints)
│   │   │   ├── authRoutes.js
│   │   │   ├── resumeRoutes.js
│   │   │   ├── analysisRoutes.js
│   │   │   └── companyRoutes.js
│   │   │
│   │   ├── controllers/    (business logic)
│   │   │   ├── authController.js
│   │   │   ├── resumeController.js
│   │   │   ├── analysisController.js
│   │   │   └── companyController.js
│   │   │
│   │   ├── middlewares/
│   │   │   ├── authMiddleware.js
│   │   │   ├── errorHandler.js
│   │   │   └── uploadMiddleware.js
│   │   │
│   │   ├── services/       (AI/ML, external APIs)
│   │   │   ├── nlpService.js       (skills extraction)
│   │   │   ├── scoringService.js   (readiness score AI model)
│   │   │   └── companyService.js   (company recommendations)
│   │   │
│   │   └── utils/          (helper functions)
│   │       └── token.js
│
├── ai-ml/   (AI models - Python or Node ML wrapper)
│   ├── 📄 requirements.txt
│   ├── resume_parser.py       (extract skills from PDF/Docx)
│   ├── skill_matcher.py       (match skills with job sectors)
│   ├── readiness_score.py     (predict readiness %)
│   ├── recommendation.py      (suggest companies)
│   └── train_model.ipynb      (Jupyter notebook for ML training)
│
└── docs/   (Documentation, API specs, designs)
    ├── API_DOCS.md
    ├── SYSTEM_DESIGN.md
    └── ROADMAP.md

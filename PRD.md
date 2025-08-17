# 📄 Product Requirement Document (PRD)  
## Product Name  
* CAP - (Career Analytics System). 

## 1. Problem Statement  
Students, freshers, and professionals struggle to understand:  
- Which skills they are strong/weak in.  
- Which type of companies they are a good fit for (Service-based, Product-based, Startup).  
- What specific skills they should improve to increase career readiness.
- At this time how much range of Package they Deserve.
- Which Company is Ready to Hire you.

## 2. Solution  
A web application where users can upload their resume. The system analyzes it, identifies skills, measures readiness for different company types, and provides improvement suggestions. Results are visualized with charts and progress tracking.  

## 3. User Personas  
1. Student/Fresher 
   - Wants to know which skills to learn to be job-ready.  
   - Seeks career direction (service/product/startup).  
   - Strong chance to get reply.

2. Working Professional
   - Wants to upskill for a career switch or promotion.  
   - Needs to track skill progress over time.  

3. Career Coach/Admin (future scope)  
   - Can review aggregated data and trends.  

## 4. Key Features (MVP)  
### User Onboarding 
  - Signup/login (email/password).  
  - Profile setup (role: student, fresher, professional).  

### Resume Upload 
  - Upload PDF/DOCX.  
  - Store securely (MongoDB/GridFS or cloud).  

### Resume Analysis (AI/ML Service) 
  - Extract skills, education, experience.  
  - Score readiness: Service-based, Product-based, Startup.  
  - Generate recommendations (missing skills). 
  - Ready for the companies to apply.
  - Deserving package at the present time. 

### Dashboard (Data Visualization) 
  - Skill list (strengths vs weaknesses).  
  - Graphs:  
    - Pie chart: % fit (service/product/startup).  
    - Radar chart: skill categories.  
    - Progress tracking line chart.  

### History Tracking
  - Save past results.  
  - Compare improvements over time.  

## 5. Success Metrics  
### User engagement: % of users uploading resume after signup.  
### Accuracy: Skill extraction accuracy ≥ 80%.  
### Retention: % of users checking dashboard multiple times.  

## 6. Future Enhancements (Phase 2)  
- Career Advice from the working Professionals or more experienced perosons. (Premium).
- Mock Interview with Experts. (Premium).
- Integration with LinkedIn API.  
- Premium plan for personalized career roadmaps.  

## Tech - Stack 
### FrontEnd (UI Layout/Design)
- React js 
- Tailwindcss
- Recharts / Chart.js / D3.js – data visualization (pie, radar, line charts)
- Axios / Fetch API – connect with backend APIs
- React Router – navigation between pages (login, upload, dashboard, history).

### Backend - (API Layer)

- Node.js + Express.js – REST API server

- Multer – handle file uploads (resumes in PDF/DOCX)

- JWT (JSON Web Tokens) – authentication & authorization

- Axios – communicate with Python ML service

- Cors / Helmet – API security

### Database And Storage 
- MongoDB (Atlas or local) – store users, resumes, analysis results

- GridFS / AWS S3 / Cloudinary – file storage for uploaded resumes

- Mongoose – ODM (Object Data Modeling) for MongoDB

### AI/ML Microservice (Resume Analysis)

- Python (3.9+) – ML/NLP service

- FastAPI / Flask – lightweight API for ML service

- PyMuPDF / pdfminer / python-docx – parse resume (PDF/DOCX → text)

- spaCy / NLTK – NLP for skills/keywords extraction

- Pandas + Scikit-learn – rule-based scoring or ML classification

- Hugging Face Transformers (optional) – advanced NLP (BERT/DistilBERT)

### DevOps
- Git + GitHub/GitLab – version control

- Postman - Client (VS Code extension) – API testing

- Docker – containerize Node.js + Python microservice

- AWS – deployment of backend + ML service

- Netlify / Vercel – frontend hosting
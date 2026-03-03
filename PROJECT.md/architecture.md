# System Architecture

## 🏗 Overall Architecture

Client (React Frontend)
        ↓
Express Backend (REST APIs)
        ↓
MongoDB Database
        ↓
AI Service (OpenAI/Gemini)

---

## 🔐 Authentication Flow

1. User registers
2. Password hashed using bcrypt
3. User logs in
4. JWT token generated
5. Token sent in Authorization header
6. Middleware verifies token

---

## 🏛 Monument Flow

1. User requests monument list
2. Backend fetches structured data from MongoDB
3. If AI mode selected:
   - Backend builds dynamic prompt
   - Sends to AI API
   - Returns generated explanation

---

## 🔄 AI Mode Logic

Mode → Prompt Variation

Student Mode → Simple language
Exam Mode → Fact-focused
Tourist Mode → Storytelling style
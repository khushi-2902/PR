# API Documentation

## 🔐 Authentication APIs

### POST /api/auth/register
Registers new user.

Body:
{
  "name": "string",
  "email": "string",
  "password": "string"
}

---

### POST /api/auth/login
Logs in user and returns JWT token.

---

## 🏛 Monument APIs

### POST /api/monuments
Creates new monument (Protected)

### GET /api/monuments
Returns all monuments

### GET /api/monuments/:id
Returns single monument

### PUT /api/monuments/:id
Updates monument (Protected)

### DELETE /api/monuments/:id
Deletes monument (Protected)
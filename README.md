# TechMart Rule-Based Chatbot 🤖

This is the backend microservice for TechMart's chatbot. It uses simple rule-based logic to respond to user messages via a REST API.

---

## 🚀 Features

- Rule-based responses for greetings, product inquiries, tracking, and support
- Simple Express server with CORS support
- JSON API for easy frontend integration
- Ready for expansion with modular logic

---

## 📦 API Endpoint

### `POST /chat`

**Request:**

```json
{
  "message": "Hi, I want to track my order"
}

{
  "reply": "📦 Please provide your order ID for tracking."
}

# Install dependencies
npm install

# Run the server
npm run dev


✨ Future Plans
- NLP-based intent detection
- Session memory
- Integration with product database
- Voice input support

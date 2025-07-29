import express from 'express';

const app = express();
const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:3000', // allow your frontend
    methods: ['POST', 'GET'],        // specify allowed methods if needed
    credentials: true                // if you're using cookies or auth headers
}));
app.use(express.json());

app.post('/chat', (req: any, res: any) => {
    const msg = req.body.message.toLowerCase();

    let reply = '🤖 Sorry, I didn’t understand that.';
    const greetings = ['hello', 'hi', 'hey', 'salam', 'shalom', 'مرحبا'];
    const items = ['iphone', 's24', 'playstation', 'macbook', 'xiaomi', 'lenovo', 'motorola'];
    const normalizedMsg = msg.toLowerCase();

    if (greetings.some(greet => msg.includes(greet))) {
        reply = 'Welcome to TechMart! How can I assist you today?';
    }
    else if (items.some(item => normalizedMsg.includes(item))) {
        reply = `Looking for a ${items.find(item => normalizedMsg.includes(item))}? We've got great deals!`;
    }
    else if (msg.includes('track')) {
        reply = '📦 Please provide your order ID for tracking.';
    } else if (msg.includes('support')) {
        reply = '👨‍💻 Reach us at support@techmart.com or on WhatsApp.';
    }

    res.json({ reply });
});


app.listen(3001, () => console.log('Chatbot is running at http://localhost:3001'));
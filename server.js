import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const app = express();
const PORT = 5001; // Hardcoded to avoid conflicts

// Middleware
app.use(cors());
app.use(express.json());

// Telegram Configuration
const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

// Alive check
console.log("Starting server process...");

app.post('/api/send-message', async (req, res) => {
  const { message } = req.body;
  
  console.log("------------------------------------------------");
  console.log("📩 Request Received:", message);

  if (!BOT_TOKEN || !CHAT_ID || BOT_TOKEN.includes('your_')) {
     console.error('❌ Check your .env file!');
     return res.status(500).json({ success: false, error: 'Server Config Error' });
  }

  const telegramUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

  try {
    console.log("🚀 Sending to Telegram...");
    await axios.post(telegramUrl, {
      chat_id: CHAT_ID,
      text: `💖 SHE SAID YES! 💍\n\n"${message}"\n\n- Sent from your Valentine App`,
    });

    console.log('✅ SUCCESS: Telegram message sent!');
    res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('❌ FAILED: Telegram API Error', error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});

const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`\n🤖 Back to TELEGRAM MODE`);
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`waiting for requests...`);
});

// Prevent exit
setInterval(() => {
    // Keep-alive heartbeat
}, 10000);

process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
});

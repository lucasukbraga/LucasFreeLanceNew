require('dotenv').config();
const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Load from .env
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

app.post('/submit-quote', async (req, res) => {
  const { name, email, phone, job, message } = req.body;

  const text = `
📥 *New Quote Request*
👤 *Name:* ${name}
📧 *Email:* ${email}
📞 *Phone:* ${phone}
💼 *Job Type:* ${job}
📝 *Message:* ${message}
  `;

  try {
    await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      chat_id: TELEGRAM_CHAT_ID,
      text,
      parse_mode: 'Markdown',
    });

    res.redirect('/?quote=success');
  } catch (err) {
    console.error('Telegram Error:', err.response?.data || err.message);
    res.status(500).send('Message failed to send.');
  }
});

// Set EJS as view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (CSS, JS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Home route (with About and Contact sections in this same page)
app.get('/', (req, res) => {
  res.render('pages/index', { title: 'Home', activePage: 'home' });
});

// Gallery route (separate page)
app.get('/gallery', (req, res) => {
  res.render('pages/gallery', { title: 'Gallery', activePage: 'gallery' });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

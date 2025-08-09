const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/test",(req, res) => res.json({message:"Working"}))

// API endpoint to save demo email requests
app.post('/api/save-demo-request', (req, res) => {
  try {
    const { email, timestamp } = req.body || {};
    if (!email || typeof email !== 'string') {
      return res.status(400).json({ success: false, message: 'Email is required' });
    }

    // Note: /tmp works only per execution on Vercel
    const record = `${new Date(timestamp || Date.now()).toISOString()}\t${email}\n`;
    const dataDir = '/tmp/data';
    const filePath = path.join(dataDir, 'demo_requests.txt');

    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    fs.appendFileSync(filePath, record, { encoding: 'utf8' });
    return res.json({ success: true });
  } catch (err) {
    console.error('Error saving demo request', err);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

// Serve React build
const buildDir = path.join(__dirname, 'build');
if (fs.existsSync(buildDir)) {
  app.use(express.static(buildDir));

  // Catch-all: send React index.html for SPA routes
  app.get('*', (req, res) => {
    res.sendFile(path.join(buildDir, 'index.html'));
  });
}

// Export for Vercel
module.exports = app;

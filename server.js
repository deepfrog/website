const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// API endpoint to save demo email requests to a local text file
app.post('/api/save-demo-request', (req, res) => {
  try {
    const { email, timestamp } = req.body || {};
    if (!email || typeof email !== 'string') {
      return res.status(400).json({ success: false, message: 'Email is required' });
    }

    const record = `${new Date(timestamp || Date.now()).toISOString()}\t${email}\n`;
    const dataDir = path.join(__dirname, 'data');
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

// Static hosting of CRA build if present
const buildDir = path.join(__dirname, 'build');
if (fs.existsSync(buildDir)) {
  app.use(express.static(buildDir));
  app.get('*', (_req, res) => {
    res.sendFile(path.join(buildDir, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});



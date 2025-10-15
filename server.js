// server.js
const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());

let announcement = '';

app.get('/announcement', (req, res) => {
  res.json({ message: announcement });
});

app.post('/announcement', (req, res) => {
  announcement = req.body.message;
  res.json({ status: 'updated' });
});

app.listen(3000, () => console.log('Backend running on port 3000'));

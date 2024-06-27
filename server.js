const express = require('express');
const app = express();
const port = 3000;

const isHealthy = () => Math.random(0,1) < 0.5;

app.get('/poll', (req, res) => {
  setTimeout(() => {
    res.json({ isAlive: isHealthy() })
  }, 10000);
});

app.listen(port => {
  console.log(`Server listening on http://localhost:${port}`);
});

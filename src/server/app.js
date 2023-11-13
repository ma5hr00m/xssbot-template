const express = require("express");
const path = require("path");
const Bot = require("../bot");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/show', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'show.html'));
});

app.post('/triggerBot', (req, res) => {
  setTimeout(() => {
    Bot.visitShow();
  }, 10000);
  res.send("Bot triggered");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

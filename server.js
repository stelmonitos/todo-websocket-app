const express = require('express');
const path = require('path');
const app = express();

app.use((req, res) => {
  res.status(404).send('Not found');
});

const server = app.listen(process.env.PORT || 8000, () => {
  console.log("Server is running on port: 8000");
})
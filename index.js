const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/test', (req, res) => {
  const data = { message: 'Hello, this is your API!' };
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

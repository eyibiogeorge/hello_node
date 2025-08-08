const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello World from Express!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://172.31.29.234:${PORT}`);
});

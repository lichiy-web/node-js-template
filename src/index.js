import express from 'express';
import { PORT } from './constants/server-settings.js';
const app = express();

app.get('/', (req, res) => {
  //   console.log(req);
  res.json({ message: 'Hello world!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});

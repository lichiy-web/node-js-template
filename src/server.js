import express from 'express';
import { PORT } from './constants/server-settings.js';
import { pinoHttp } from 'pino-http';
import cors from 'cors';

export const startServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());

  app.use(
    pinoHttp({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.get('/', (req, res) => {
    res.json({ message: 'Hello world!' });
  });

  app.use('*', (req, res, next) => {
    res.status(404).json({
      message: 'Page not found',
    });
  });

  app.use((err, req, res, next) => {
    res.status(500).json({
      message: 'Something went wrong',
      error: err.message,
    });
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
  });
};

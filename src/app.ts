import express from 'express';
import errorHandler from './middlewares/error';

const app: express.Application = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/keyboard', (req: express.Request, res: express.Response) => {
  const data = { type: 'text' };
  res.json(data);
});

app.post('/message', (req: express.Request, res: express.Response) => {
  const message = req.body.userRequest.utterance;
});

app.use(errorHandler);

export default app;

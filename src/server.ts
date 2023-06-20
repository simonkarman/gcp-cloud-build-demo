import express, { Request, Response } from 'express';

export const app = express();
app.use(express.json());
app.get('/', (req: Request, res: Response) => {
  res.send('Server running NodeJS for the demo of Google Cloud Build! Hello!');
});

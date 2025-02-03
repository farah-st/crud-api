import express, { Request, Response } from 'express';
import userRoutes from './routes/userRoutes';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api', userRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the CRUD API');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

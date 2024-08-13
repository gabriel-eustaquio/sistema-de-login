import express from 'express';
import 'dotenv/config';
import userRoutes from './routes/userRoutes';
const server = express();

server.use(express.json());

server.use(userRoutes);

server.listen(process.env.PORT);
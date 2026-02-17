import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import { authMiddleware } from "./middlewares/auth.middleware";
import authRouter from './routes/auth.routes'

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use("/", authRouter);

// middleware error
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(400).send(err.message);
});

export default app;

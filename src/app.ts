import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import authRouter from './routes/auth.routes';
import membershipPlanRouter from './routes/membershipPlan.routes';

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use("/", authRouter);
app.use("/membership-plan", membershipPlanRouter);

// middleware error
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(400).send(err.message);
});

export default app;

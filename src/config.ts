import dotenv from "dotenv";

dotenv.config();

export const BASE_URL_FE = process.env.BASE_URL_FE;
export const PORT = process.env.PORT;
export const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";
export const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "1d";
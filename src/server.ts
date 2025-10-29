import express from "express";
import authRoutes from "./routes/authRoutes";
import habitRoutes from "./routes/habitRoutes";
import userRoutes from "./routes/userRoutes";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { isTest } from "../env";

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
	morgan("dev", {
		skip: () => isTest(),
	})
);

app.get("/health", (req, res) => {
	res.json({ message: "Server is running" });
});

app.use("/api/auth", authRoutes);
app.use("/api/habits", habitRoutes);
app.use("/api/users", userRoutes);

export { app };
export default app;

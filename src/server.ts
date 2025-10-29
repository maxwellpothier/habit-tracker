import express from "express";
import authRoutes from "./routes/authRoutes";
import habitRoutes from "./routes/habitRoutes";
import userRoutes from "./routes/userRoutes";

const app = express();

app.get("/health", (req, res) => {
	res.json({ message: "Server is running" });
});

app.use("/api/auth", authRoutes);
app.use("/api/habits", habitRoutes);
app.use("/api/users", userRoutes);

export { app };
export default app;

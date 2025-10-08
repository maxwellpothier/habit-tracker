import express from "express";

const app = express();

app.get("/health", (req, res) => {
	res.json({ message: "Server is running" });
});

export { app };
export default app;

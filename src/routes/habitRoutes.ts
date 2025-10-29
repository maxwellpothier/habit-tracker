import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
	res.json({ message: "Habits fetched successfully" });
});

router.get("/:id", (req, res) => {
	res.json({ message: "Habit fetched successfully" });
});

router.post("/", (req, res) => {
	res.status(201).json({ message: "Habit created successfully" });
});

router.delete("/:id", (req, res) => {
	res.json({ message: "Habit deleted successfully" });
});

router.post("/:id/complete", (req, res) => {
	res.json({ message: "Habit completed successfully" });
});

export default router;

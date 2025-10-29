import { Router } from "express";
import { validateBody } from "../middleware/validation";
import { z } from "zod";

const createHabitSchema = z.object({
	name: z.string(),
});

const router = Router();

router.get("/", (req, res) => {
	res.json({ message: "Habits fetched successfully" });
});

router.get("/:id", (req, res) => {
	res.json({ message: "Habit fetched successfully" });
});

router.post("/", validateBody(createHabitSchema), (req, res) => {
	res.status(201).json({ message: "Habit created successfully" });
});

router.delete("/:id", (req, res) => {
	res.json({ message: "Habit deleted successfully" });
});

router.post("/:id/complete", (req, res) => {
	res.json({ message: "Habit completed successfully" });
});

export default router;

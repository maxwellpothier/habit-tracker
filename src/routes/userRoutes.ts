import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
	res.json({ message: "Users fetched successfully" });
});

router.get("/:id", (req, res) => {
	res.json({ message: "User fetched successfully" });
});

router.post("/", (req, res) => {
	res.status(201).json({ message: "User created successfully" });
});

router.delete("/:id", (req, res) => {
	res.json({ message: "User deleted successfully" });
});

export default router;

import type { Request, Response, NextFunction } from "express";
import { ZodSchema, ZodError } from "zod";

export const validateBody = (schema: ZodSchema) => {
	return (req: Request, res: Response, next: NextFunction) => {
		try {
			const validatedData = schema.parse(req.body);
			req.body = validatedData;
			next();
		} catch (e) {
			if (e instanceof ZodError) {
				return res.status(400).json({
					error: "Validation error",
					details: e.issues.map((err) => ({
						field: err.path.join("."),
						message: err.message,
					})),
				});
			}
		}
	};
};

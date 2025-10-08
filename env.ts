import { env as loadEnv } from "custom-env";
import { z } from "zod";

process.env.APP_STAGE = process.env.APP_STAGE || "dev";

const isProduction = process.env.APP_STAGE === "prod";
const isDevelopment = process.env.APP_STAGE === "dev";
const isTest = process.env.APP_STAGE === "test";

if (isDevelopment) {
	loadEnv();
} else if (isTest) {
	loadEnv("test");
}

const envSchema = z.object({
	NODE_ENV: z
		.enum(["development", "production", "test"])
		.default("development"),

	APP_STAGE: z.enum(["dev", "prod", "test"]).default("dev"),
	PORT: z.coerce.number().positive().default(3000),
	DATABASE_URL: z.string().startsWith("postgresql://"),
	JWT_SECRET: z
		.string()
		.min(32, "JWT_SECRET must be at least 32 characters long"),
	JWT_EXPIRES_IN: z.string().default("7d"),
	BCRYPT_ROUNDS: z.coerce.number().min(10).max(20).default(12),
});

export type Env = z.infer<typeof envSchema>;
let env: Env;

try {
	env = envSchema.parse(process.env);
} catch (e) {
	if (e instanceof z.ZodError) {
		console.error(
			"Invalid environment variables:",
			JSON.stringify(e.flatten().fieldErrors, null, 2)
		);
		e.errors.forEach((error) => {
			const path = error.path.join(".");
			console.log(`${path}: ${error.message}`);
		});
		process.exit(1);
	}

	throw e;
}

export { env };

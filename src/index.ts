import { app } from "./server.js";
import { env } from "../env";

app.listen(env.PORT || 3001, () => {
	console.log(
		`Server running at http://localhost:${process.env.PORT || 3001}`
	);
});

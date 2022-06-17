import {createServer} from "http";

const port = process.env.PORT || 3080

const server = createServer((req, res) => {

	if (req.url === "/api/sayhello") {
		res.statusCode = 200;
		res.setHeader("Content-type", "text-plain")
		return res.end("Saying hello")
	}

	if (req.url === "/api/users") {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'application/json');
		return res.end(JSON.stringify([{name: "John Doe"}]))
	}

	if (req.url === "/api/send") {
		res.statusCode = 200;
		const data = new Promise((resolve, reject) => {
			let body = ""
			req.on("data", (chunk) => {
				body += chunk.toString()
			})
			req.on("end", () => {
				resolve(body)
				console.log("body", body)
			})
		})
	}

	console.log(req.url);
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end("HELLO WORLD")
});

server.listen(port, () => {
	console.log(`Server running at port ${port}`);
});
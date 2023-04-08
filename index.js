const http = require("http");
const cors = require("cors");
const express = require("express");
const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 4000;
const authRoutes = require("./Routes/authRoute");
require("dotenv").config();
app.use(cors());
app.use(express.json());
app.use(authRoutes);
server.listen(port, () => {
	console.log(`server is running on http://localhost:${port}`);
});

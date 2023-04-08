const router = require("express").Router();
const { countries } = require("../Data");

router.get("/", (req, res) => {
	res.send("server running");
});

router.get("/countries", (req, res) => {
	res.status(200).send({ message: "countries", data: countries });
});

module.exports = router;

const router = require("express").Router();
const { User } = require("../models/user");
const { Song, validate } = require("../models/song");
const validateObjectId = require("../middleware/validateObjectId");

// Create song
router.post("/", async (req, res) => {
	const { error } = validate(req.body);
	if (error) res.status(400).send({ message: error.details[0].message });

	const song = await Song(req.body).save();
	res.status(201).send({ data: song, message: "Song created successfully" });
});

// Get all songs
router.get("/", async (req, res) => {
	const songs = await Song.find();
	res.status(200).send({ data: songs });
});

// Update song
router.put("/:id", [validateObjectId], async (req, res) => {
	const song = await Song.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
	});
	res.send({ data: song, message: "Updated song successfully" });
});

// Delete song by ID
router.delete("/:id", [validateObjectId], async (req, res) => {
	await Song.findByIdAndDelete(req.params.id);
	res.status(200).send({ message: "Song deleted sucessfully" });
});

module.exports = router;

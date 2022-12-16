const mongoose = require("mongoose");
const Joi = require("joi");

const ObjectId = mongoose.Schema.Types.ObjectId;

const playListSchema = new mongoose.Schema({
	name: { type: String, required: true },
	user: { type: ObjectId, ref: "user", required: true },
	songs: { type: Array, default: [] },

});

const validate = (playList) => {
	const schema = Joi.object({
		name: Joi.string().required(),
		user: Joi.string().required(),
		songs: Joi.array().items(Joi.string()),

	});
	return schema.validate(playList);
};

const PlayList = mongoose.model("playList", playListSchema);

module.exports = { PlayList, validate };

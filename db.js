const mongoose = require("mongoose");

module.exports = async () => {
	const connectionParams = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	};
	try {
		await mongoose.connect(`mongodb://localhost:27017/${process.env.DB}`, connectionParams);
		console.log("connected to database successfully");
	} catch (error) {
		console.log("could not connect to database.", error);
	}
};

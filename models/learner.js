const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Shape of User document.
const learnerSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  rank: {
    type: Number
  }
  // subjectTrainer: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "trainer"
  //   }
  // ]
});

// Create model of the user schema
module.exports = mongoose.model("learner", learnerSchema);

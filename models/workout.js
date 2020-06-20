const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: String,
    trim: true,
  },

  workout: [
    {
    name:{
        type: String,
        trim: true,
        required: "Please enter a name"
      }
}]
});

const workout = mongoose.model("Workout", WorkoutSchema);

module.exports = workout;

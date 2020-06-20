const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: String,
    trim: true,
  },

  exercises: [
    {
      name: {
        type: String,
        trim: true,
        required: "Please enter a name"
      },
      type: {
        type: String,
        trim: true,
      },
      duration: {
        type: Number,
        trim: true,
      },
      weight: {
        type: Number,
        trim: true,
      },
      reps: {
        type: Number,
        trim: true,
      },
      sets: {
        type: Number,
        trim: true,
      },
      distance: {
        type: Number,
        trim: true,
      },
    }]
});

const workout = mongoose.model("Workout", WorkoutSchema);

module.exports = workout;

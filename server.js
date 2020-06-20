const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const router = require ("express").Router();
const path = require ("path")

const PORT = process.env.PORT || 3000;

const Exercise = require("./models/workout.js");
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Workout", { useNewUrlParser: true });

router.post("/api/workouts", (req, res) => {
console.log('Hello world')
  Exercise.create({
    
  })
    .then(Workout => {
      res.json(Workout);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get("/exercise", (req, res) => {
  console.log('Hello world')
    res.sendFile(path.join(__dirname + "public/exercise.html"))
  });

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

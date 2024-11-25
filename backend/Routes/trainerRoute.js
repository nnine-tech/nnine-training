const { Router } = require("express");
const {
  createTrainer,
  getAllTrainer,
  getSpecificTrainer,
  updateTrainer,
  deleteTrainer,
} = require("../Controller/trainerController");

const trainerRouter = Router();

trainerRouter
  .route("/")
  .post(createTrainer) // Create trainer
  .get(getAllTrainer); // Get all trainers

// Routes for `/id` 
trainerRouter
  .route("/:id")
  .get(getSpecificTrainer) // Get specific trainer
  .put(updateTrainer) // Update trainer (use PUT instead of POST)
  .delete(deleteTrainer); // Delete trainer

module.exports = trainerRouter;

const ProfileController = require("../controllers/profiles");
const express = require("express");

// API routes
const router = express.Router();

router
  .route("/profiles")
  .get(ProfileController.findAllProfiles)
  .post(ProfileController.addProfile);

router
  .route("/profiles/:id")
  .get(ProfileController.findById)
  .delete(ProfileController.deleteProfile);

module.exports = router;
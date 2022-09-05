const mongoose = require("mongoose");
const Profile = require('../models/Profile');

const findAllProfiles = (req, res) => {
  Profile.find((err, profiles) => {
    err && res.send(500).send(err.message);

    console.log("GET /profiles");
    res.status(200).json(profiles);
  });
};

const findById = (req, res) => {
  Profile.findById(req.params.id, (err, profile) => {
    if (err) return res.send(500).send(err.message);

    console.log(`GET /profile/${req.params.id}`);
    res.status(200).json(profile);
  });
};

const addProfile = (req, res) => {
  console.log("POST");
  console.log(req.body);

  let profile = new Profile({
    name: req.body.name,
    username: req.body.username,
    password: req.body.password,
  });

  profile.save((err, profile) => {
    if (err) return res.status(500).send(err.message);
    res.status(200).json(profile);
  });
};

const deleteProfile = (req, res) => {
  Profile.findById(req.params.id, (err, profile) => {
    profile.remove((err) => {
      if (err) return res.status(500).send(err.message);
      res.status(200).send();
    });
  });
};

module.exports = { findAllProfiles, findById, addProfile, deleteProfile };
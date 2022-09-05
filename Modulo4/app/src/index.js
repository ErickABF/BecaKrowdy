const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ProfileRouter = require("./routes/profiles");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", ProfileRouter);

mongoose.connect(
  "mongodb://mongo_db/example",
  { useNewUrlParser: true },
  (err, res) => {
    err && console.log(`ERROR: Connecting to DB ${err}`);
    app.listen(3000, () =>
      console.log("Node server running on http://mongo_db:3000")
    );
  }
);

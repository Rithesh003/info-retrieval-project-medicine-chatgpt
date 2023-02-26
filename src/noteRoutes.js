const express = require("express");
const router = express.Router();
const Note = require("./noteModels");

router.route("/create").post((req, res) => {
  const email = req.body.email;
  const CurrencyA = req.body.CurrencyA;
  const objectivityA = req.body.objectivityA;
  const ReliabilityA = req.body.ReliabilityA;
  const relevanceA = req.body.relevanceA;
  const CurrencyB = req.body.CurrencyB;
  const objectivityB = req.body.objectivityB;
  const ReliabilityB = req.body.ReliabilityB;
  const relevanceB = req.body.relevanceB;
  const Similarity = req.body.Similarity;
  const newNote = new Note({
    email,
    CurrencyA,
    objectivityA,
    ReliabilityA,
    relevanceA,
    CurrencyB,
    objectivityB,
    ReliabilityB,
    relevanceB,
    Similarity,
  });

  newNote.save();
});

router.route("/notes").get((req, res) => {
  Note.find().then((foundNotes) => res.json(foundNotes));
});

module.exports = router;

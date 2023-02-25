const mongoose = require("mongoose");

const notesSchema = {
  email: String,
  CurrencyA: String,
  objectivityA: String,
  ReliabilityA: String,
  relevanceA: String,
  CurrencyB: String,
  objectivityB: String,
  ReliabilityB: String,
  relevanceB: String,
  Similarity: String,
};

const Note = mongoose.model("Note", notesSchema);

module.exports = Note;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const answerSchema = new Schema({
  email: { type: String, required: true, unique: true },
  question: { type: String, required: true },
  resultA: { type: String, required: true },
  currency: { type: String },
  readability: {
    fleschReadingEase: { type: Number },
    fleschKincaidScore: { type: Number },
  },
  reliability: { type: String },
  objectivity: { type: String },
  relevance: { type: String },
});
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://rithesh003:p19y1y3pzIwwDR6g@Results.mongodb.net/myfirstdatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("Error connecting to database:", err);
  });
const Answer = mongoose.model("Answer", answerSchema);
const answer = new Answer({
  email: email,
  question: currentQuestion,
  resultA: person.ResultA,
  currency: selectedValue1,
  readability: {
    fleschReadingEase: getFleschReadingEaseScore(person.ResultA),
    fleschKincaidScore: getFleschKincaidScore(person.ResultA),
  },
  reliability: selectedValue2,
  objectivity: selectedValue3,
  relevance: selectedValue4,
});

answer
  .save()
  .then(() => {
    console.log("Answer saved");
  })
  .catch((err) => {
    console.log("Error saving answer:", err);
  });
Answer.findOne({ email: email }, (err, answer) => {
  if (err) {
    console.log("Error retrieving answer:", err);
  } else if (answer) {
    setSelectedValue1(answer.currency);
    setSelectedValue2(answer.reliability);
    setSelectedValue3(answer.objectivity);
    setSelectedValue4(answer.relevance);
  }
});

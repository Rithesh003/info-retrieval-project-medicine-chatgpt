import React, { useState } from "react";
import "./evaluation.css";

const data = [
  [
    {
      id: 1,
      question:
        "Is it true that people with Alzheimer’s disease are particularly prone to depression?",
      chatgpt:
        "Yes, people with Alzheimer's disease are at a higher risk of depression due to changes in the brain,difficulty adapting, social isolation, and other factors. It is important to recognize and treat symptoms of depression.",
      google:
        "Experts estimate that up to 40 percent of people with Alzheimer's disease suffer from significant depression. Identifying depression in someone with Alzheimer's can be difficult, since dementia can cause some of the same symptoms.",
      image: require("./Q1.png"),
      metrics: "",
      comment: "",
    },
  ],
  [
    {
      id: 2,
      question:
        "Is it false that it has been scientifically proven that mental exercise can prevent a person from gettingAlzheimer’s disease? ",
      chatgpt:
        "No, its not False. Evidence suggests that mental exercise may delay onset or slow progression of Alzheimer's, but more research is needed to understand the relationship.",
      google:
        "Neither education nor brain exercises are a sure way to prevent Alzheimer's. But they may help delay symptoms and keep the mind working better for longer.",
      image: require("./Q2.png"),
      metrics: "",
      comment: "",
    },
  ],
  [
    {
      id: 3,
      question:
        "Is it true that after symptoms of Alzheimer’s disease appear, the average life expectancy is 6 to 12 years?",
      chatgpt:
        "Yes, that is generally true. After Alzheimer's symptoms appear, average life expectancy is 6-12 years, but this can vary depending on various factors.",
      google:
        "On average, a person with Alzheimer's lives four to eight years after diagnosis, but can live as long as 20 years, depending on other factors.",
      image: require("./Q3.png"),
      metrics: "",
      comment: "",
    },
  ],
];
const imageSources = {
  1: require("./Q1.png"),
  2: require("./Q2.png"),
  3: require("./Q3.png"),
};
function App() {
  const [index, setIndex] = useState(0);
  const [selectedQuestion, setSelectedQuestion] = useState(data[0][0]);
  const [submitted, setSubmitted] = useState(false);

  function handleClick(id) {
    if (id === 1) {
      window.open(
        `https://www.google.com/search?q=1.+Is+it+true+that+people+with+Alzheimer%E2%80%99s+disease+are+particularly+prone+to+depression%3F&rlz=1C1GCEA_enUS1026US1026&sxsrf=AJOqlzXJIQaKxRmjOW9I6n7LcXe-wnO5Yg%3A1675902328121&ei=eD3kY8DqBtCckPIPx4iOsAw`
      );
    } else if (id === 2) {
      window.open(
        `https://www.google.com/search?q=2.+Is+it+false+that+it+has+been+scientifically+proven+that+mental+exercise+can+prevent+a+person+from+gettingAlzheimer%E2%80%99s+disease%3F&rlz=1C1GCEA_enUS1026US1026&sxsrf=AJOqlzWVCeML33SerabrTUHtfKLFfUi3og%3A1675902747953&ei=Gz_kY9vUOcbOkPIPiLeIuA8`
      );
    } else if (id === 3) {
      window.open(
        `https://www.google.com/search?q=Is+it+true+that+after+symptoms+of+Alzheimer%E2%80%99s+disease+appear%2C+the+average+life+expectancy+is+6+to+12+years%3F&rlz=1C1GCEA_enUS1026US1026&sxsrf=AJOqlzUDvoOMX8BHItNAdQ1F9UJQSdZVAQ%3A1675902993713&ei=EUDkY-KBK8XOkPIP7teXyAY`
      );
    }
  }

  const handleMetricsChange = (event) => {
    setSelectedQuestion({
      ...selectedQuestion,
      metrics: event.target.value,
    });
  };

  const handleCommentChange = (event) => {
    setSelectedQuestion({
      ...selectedQuestion,
      comment: event.target.value,
    });
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="App">
      <video src="/videos/video1.mp4" autoPlay loop muted />
      <h1 style={{ color: "aliceblue" }}>
        {" "}
        Comparision Between ChatGPT and Google{" "}
      </h1>
      <table>
        <thead>
          <tr>
            <th>Question</th>
            <th>ChatGPT</th>
            <th>Google</th>
          </tr>
        </thead>
        <tbody>
          {data[index].map((person) => (
            <tr key={person.question}>
              <td>{person.question}</td>
              <td>{person.chatgpt}</td>
              <td>
                {imageSources[person.id] && (
                  <img
                    src={imageSources[person.id]}
                    alt="Google Image"
                    onClick={() => handleClick(person.id)}
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="buttons">
        <button
          disabled={index === 0}
          onClick={() => {
            setIndex(index - 1);
            setSelectedQuestion(data[index - 1][0]);
          }}
        >
          Previous
        </button>
        <button
          disabled={index === data.length - 1}
          onClick={() => {
            setIndex(index + 1);
            setSelectedQuestion(data[index + 1][0]);
            setSubmitted(false);
          }}
        >
          Next
        </button>
      </div>
      {!submitted && (
        <div className="evaluation-form">
          <div>
            <label>Evaluation Metrics:</label>
            <select
              value={selectedQuestion.metrics}
              onChange={handleMetricsChange}
            >
              <option value="">--Select--</option>
              <option value="reliability">reliability</option>
              <option value="currency">currency</option>
              <option value="readability">readability</option>
              <option value="disclosure">disclosure</option>
              <option value="objectivity">objectivity</option>
              <option value="relevance">relevance</option>
            </select>
          </div>
          <div>
            <label>Comment:</label>
            <textarea
              value={selectedQuestion.comment}
              onChange={handleCommentChange}
            />
          </div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
      {submitted && (
        <div className="result">
          <p>Evaluation Metrics: {selectedQuestion.metrics}</p>
          <p>Comment: {selectedQuestion.comment}</p>
        </div>
      )}
    </div>
  );
}

export default App;

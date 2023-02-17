import React, { useState } from "react";
import "./evaluation.css";

const data = [
  [
    {
      id: 1,
      question:
        "Is it true that people with Alzheimer’s disease are particularly prone to depression?",
      ResultA:
        "Yes, people with Alzheimer's disease are at a higher risk of depression due to changes in the brain,difficulty adapting, social isolation, and other factors. It is important to recognize and treat symptoms of depression.",
      ResultB:
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
      ResultA:
        "No, its not False. Evidence suggests that mental exercise may delay onset or slow progression of Alzheimer's, but more research is needed to understand the relationship.",
      ResultB:
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
      ResultA:
        "Yes, that is generally true. After Alzheimer's symptoms appear, average life expectancy is 6-12 years, but this can vary depending on various factors.",
      ResultB:
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
function getFleschReadingEaseScore(text) {
  const sentences = text.split(/[.?!]/);
  const words = text.match(/\w+/g);
  const syllables = text.match(/[aeiouy]+/gi);

  const ASL = words.length / sentences.length;
  const ASW = syllables.length / words.length;

  const score = 206.835 - 1.015 * ASL - 84.6 * ASW;

  return isNaN(score) ? "" : score.toFixed(2);
}
function getFleschKincaidScore(text) {
  const sentences = text.split(/[.?!]/);
  const words = text.match(/\w+/g);
  const syllables = text.match(/[aeiouy]+/gi);

  const ASL = words.length / sentences.length;
  const ASW = syllables.length / words.length;

  const score2 = 0.39 * ASL + 11.8 * ASW - 15.59;

  return isNaN(score2) ? "" : score2.toFixed(2);
}
function App(props) {
  const [index, setIndex] = useState(0);
  const [selectedQuestion, setSelectedQuestion] = useState(data[0][0]);
  const [submitted, setSubmitted] = useState(false);
  //   const [allOptionsSelected, setAllOptionsSelected] = useState(false);
  const [selectedValue1, setSelectedValue1] = useState("");
  const [selectedValue2, setSelectedValue2] = useState("");
  const [selectedValue3, setSelectedValue3] = useState("");
  const [selectedValue4, setSelectedValue4] = useState("");
  const [selectedValue5, setSelectedValue5] = useState("");
  const [selectedValue6, setSelectedValue6] = useState("");
  const [selectedValue7, setSelectedValue7] = useState("");
  const [selectedValue8, setSelectedValue8] = useState("");
  const [selectedValue9, setSelectedValue9] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const totalQuestions = 30;

  const saveSelectedOptions = () => {
    // Create an object with the selected values

    const selectedOptions = {
      value1: selectedValue1,
      value2: selectedValue2,
      value3: selectedValue3,
      value4: selectedValue4,
      value5: selectedValue5,
      value6: selectedValue6,
      value7: selectedValue7,
      value8: selectedValue8,
      // fleschReadingEase: getFleschReadingEaseScore(score),
      // fleschKincaidScore: getFleschKincaidScore(score2),
      // fleschReadingEase: getFleschReadingEaseScore(score),
      // fleschKincaidScore: getFleschKincaidScore(score2),
    };
    // Check if selectedOptions is a valid object
    if (!selectedOptions || Object.keys(selectedOptions).length === 0) {
      console.error("Error: selectedOptions is not a valid object");
      return;
    }

    // Convert the object to a JSON string
    let jsonOptions;
    try {
      jsonOptions = JSON.stringify(selectedOptions);
    } catch (e) {
      console.error(`Error: JSON.stringify failed - ${e}`);
      return;
    }
    // Create a new Blob object with the JSON string
    // const blob = new Blob([jsonOptions], { type: "application/json" });

    // // Create a new anchor element to download the file
    // const anchor = document.createElement("a");
    // anchor.download = "options.json";
    // anchor.href = URL.createObjectURL(blob);

    // // Click the anchor to trigger the download
    // anchor.click();

    // console.log("Options saved successfully!");
    // Save the JSON string to local storage
    try {
      localStorage.setItem("selectedOptions", jsonOptions);
      console.log(selectedOptions);
      console.log("Options saved successfully!");
    } catch (e) {
      console.error(`Error: localStorage.setItem failed - ${e}`);
      return;
    }
  };
  const handleChange1 = (event) => {
    setSelectedValue1(event.target.value);
  };
  const handleChange2 = (event) => {
    setSelectedValue2(event.target.value);
  };
  const handleChange3 = (event) => {
    setSelectedValue3(event.target.value);
  };
  const handleChange4 = (event) => {
    setSelectedValue4(event.target.value);
  };
  const handleChange5 = (event) => {
    setSelectedValue5(event.target.value);
  };
  const handleChange6 = (event) => {
    setSelectedValue6(event.target.value);
  };
  const handleChange7 = (event) => {
    setSelectedValue7(event.target.value);
  };
  const handleChange8 = (event) => {
    setSelectedValue8(event.target.value);
  };
  const handleChange9 = (event) => {
    setSelectedValue9(event.target.value);
  };

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

  //   const handleMetricsChange = (event) => {
  //     setSelectedQuestion({
  //       ...selectedQuestion,
  //       metrics: event.target.value,
  //     });
  //   };

  // const handleCommentChange = (event) => {
  //   setSelectedQuestion({
  //     ...selectedQuestion,
  //     comment: event.target.value,
  //   });
  // };

  // const handleSubmit = () => {
  //   setSubmitted(true);
  // };
  const [date, setDate] = useState(new Date());

  // Update the date and time every second
  setInterval(() => {
    setDate(new Date());
  }, 1000);

  return (
    <div className="App">
      <h1> Compare Question answering results </h1>
      <br />
      {/* <th>Question</th> */}
      {data[index].map((person) => (
        <td>
          <u>Question</u>: {currentQuestion} of {totalQuestions}
          <br /> {person.question}
        </td>
      ))}
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Source</th>
            <th>Answer</th>
            <th>Currency</th>
            <th>Readability</th>
            <th>Reliability</th>
            <th>objectivity</th>
            <th>relevance</th>
          </tr>
        </thead>
        <tbody>
          {data[index].map((person) => (
            <tr key={person.question}>
              <td>{date.toLocaleDateString()}</td>
              <td>Result A</td>
              <td>{person.ResultA}</td>
              <td>
                <select value={selectedValue1} onChange={handleChange1}>
                  <option value="">--Select--</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                  <option value="not sure">Not Sure</option>
                </select>
              </td>
              <td>
                <p>Score FRS: {getFleschReadingEaseScore(person.ResultA)}</p>
                <p>Score FKS: {getFleschKincaidScore(person.ResultA)}</p>
              </td>
              <td>
                <select value={selectedValue2} onChange={handleChange2}>
                  <option value="">--Select--</option>
                  <option value="reliable source">Reliable Source</option>
                  <option value="other source">Other Source</option>
                  <option value="no source">No Source</option>
                  <option value="not sure">Not Sure</option>
                </select>
              </td>
              <td>
                <select value={selectedValue3} onChange={handleChange3}>
                  <option value="">--Select--</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                  <option value="not sure">Not Sure</option>
                </select>
              </td>
              <td>
                <select value={selectedValue4} onChange={handleChange4}>
                  <option value="">--Select--</option>
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                  <option value="not sure">Not Sure</option>
                </select>
              </td>
            </tr>
          ))}
          {data[index].map((person) => (
            <tr key={person.question}>
              <td>{date.toLocaleDateString()}</td>
              <td>Result B</td>
              <td>
                {imageSources[person.id] && (
                  <img
                    src={imageSources[person.id]}
                    alt="Google Image"
                    onClick={() => handleClick(person.id)}
                  />
                )}
              </td>

              <td>
                <select value={selectedValue5} onChange={handleChange5}>
                  <option value="">--Select--</option>
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                  <option value="not sure">Not Sure</option>
                </select>
              </td>
              <td>
                <p>Score FRS: {getFleschReadingEaseScore(person.ResultB)}</p>
                <p>Score FKS: {getFleschKincaidScore(person.ResultB)}</p>
              </td>

              <td>
                <select value={selectedValue6} onChange={handleChange6}>
                  <option value="">--Select--</option>
                  <option value="reliable source">Reliable Source</option>
                  <option value="other source">Other Source</option>
                  <option value="no source">No Source</option>
                  <option value="not sure">Not Sure</option>
                </select>
              </td>
              <td>
                <select value={selectedValue7} onChange={handleChange7}>
                  <option value="">--Select--</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                  <option value="not sure">Not Sure</option>
                </select>
              </td>
              <td>
                <select value={selectedValue8} onChange={handleChange8}>
                  <option value="">--Select--</option>
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                  <option value="not sure">Not Sure</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      {!submitted && (
        <div className="row">
          <div className="simi">
            {" "}
            <h3> Similarities Between the two Results </h3>
            <br />
            <select
              className="dropdown-menu"
              value={selectedValue9}
              onChange={handleChange9}
            >
              <option value="">--Select--</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
              <option value="not sure">Not Sure</option>
            </select>
          </div>
          <br />
          {/* <div className="comment">
            <label>Comment:</label>
            <br />
            <br />
            <textarea
              value={selectedQuestion.comment}
              onChange={handleCommentChange}
            />
            <br />
            <br />
            <button onClick={handleSubmit}>Submit</button>
          </div> */}
        </div>
      )}
      <div className="buttons">
        <button
          disabled={index === 0}
          onClick={() => {
            setIndex(index - 1);
            if (currentQuestion < totalQuestions) {
              setCurrentQuestion(currentQuestion - 1);
            }
            setSelectedQuestion(data[index - 1][0]);
          }}
        >
          Previous
        </button>

        <button
          disabled={
            !selectedValue1 ||
            !selectedValue2 ||
            !selectedValue3 ||
            !selectedValue4 ||
            !selectedValue5 ||
            !selectedValue6 ||
            !selectedValue7 ||
            !selectedValue8 ||
            !selectedValue9
          }
          onClick={() => {
            saveSelectedOptions();
            if (index < data.length - 1) {
              setIndex(index + 1);
              if (currentQuestion < totalQuestions) {
                setCurrentQuestion(currentQuestion + 1);
              }
              setSelectedQuestion(data[index + 1][0]);
              setSubmitted(false);
            }
          }}
        >
          Next
        </button>
      </div>
      {/* <button onClick={saveSelectedOptions}>Save Options</button> */}

      {submitted && (
        <div className="result">
          {/* <p>Evaluation Metrics: {selectedQuestion.metrics}</p> */}
          <p>Comment: {selectedQuestion.comment}</p>
        </div>
      )}
    </div>
  );
}

export default App;
// import React, { useState } from "react";

// function App() {
//   const [selectedValue, setSelectedValue] = useState("");

//   const handleChange = (event) => {
//     setSelectedValue(event.target.value);
//   };

//   const handleNext = () => {
//     if (!selectedValue) {
//       alert("Please select an option from the dropdown");
//       return;
//     }
//     console.log(selectedValue);
//   };

//   return (
//     <div>
//       <select value={selectedValue} onChange={handleChange}>
//         <option value="">--Select--</option>
//         <option value="low">Low</option>
//         <option value="medium">Medium</option>
//         <option value="high">High</option>
//         <option value="not sure">Not Sure</option>
//       </select>
//       {/* <button onClick={handleNext}>Next</button> */}

//       <select value={selectedValue} onChange={handleChange}>
//         <option value="">--Select--</option>
//         <option value="low">Low</option>
//         <option value="medium">Medium</option>
//         <option value="high">High</option>
//         <option value="not sure">Not Sure</option>
//       </select>
//       <button onClick={handleNext}>Next</button>
//     </div>
//   );
// }

// export default App;

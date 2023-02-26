import React, { useState, useEffect } from "react";
import "./evaluation.css";
import jwt from "jsonwebtoken";
import Cookies from "js-cookie";
import axios from "axios";

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
  // const [documents, setDocuments] = useState([]);
  // const [selectedValue1, setSelectedValue1] = useState("");
  // const [selectedValue2, setSelectedValue2] = useState("");
  // const [selectedValue3, setSelectedValue3] = useState("");
  // const [selectedValue4, setSelectedValue4] = useState("");
  // const [selectedValue5, setSelectedValue5] = useState("");
  // const [selectedValue6, setSelectedValue6] = useState("");
  // const [selectedValue7, setSelectedValue7] = useState("");
  // const [selectedValue8, setSelectedValue8] = useState("");
  // const [selectedValue9, setSelectedValue9] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedOptions, setselectedOptions] = useState("");

  const totalQuestions = 30;
  const [email, setEmail] = useState("");

  // const handleFormSubmit = (event) => {
  //   alert("Email Submitted");
  //   event.preventDefault();

  //   // generate a new JWT token with the updated email parameter
  //   const token = jwt.sign({ email: email }, "yourSecretKeyHere");

  //   // set the JWT token as a cookie with the name "jwtToken"
  //   Cookies.set("jwtToken", token, { expires: 1, path: "/" });
  // };
  // const saveSelectedOptions = () => {
  // Create an object with the selected values

  //   const selectedOptions = {
  //     value1: selectedValue1,
  //     value2: selectedValue2,
  //     value3: selectedValue3,
  //     value4: selectedValue4,
  //     value5: selectedValue5,
  //     value6: selectedValue6,
  //     value7: selectedValue7,
  //     value8: selectedValue8,
  //   };
  //   // Check if selectedOptions is a valid object
  //   if (!selectedOptions || Object.keys(selectedOptions).length === 0) {
  //     console.error("Error: selectedOptions is not a valid object");
  //     return;
  //   }

  //   // Convert the object to a JSON string
  //   let jsonOptions;
  //   try {
  //     jsonOptions = JSON.stringify(selectedOptions);
  //   } catch (e) {
  //     console.error(`Error: JSON.stringify failed - ${e}`);
  //     return;
  //   }
  //   try {
  //     localStorage.setItem("selectedOptions", jsonOptions);
  //     console.log(selectedOptions);
  //     console.log("Options saved successfully!");
  //   } catch (e) {
  //     console.error(`Error: localStorage.setItem failed - ${e}`);
  //     return;
  //   }
  // };
  // useEffect(() => {
  //   // Retrieve all documents from MongoDB when component mounts
  //   axios
  //     .get("/api/documents")
  //     .then((res) => setDocuments(res.data))
  //     .catch((err) => console.log(err));
  // }, []);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Add a new document to MongoDB when form is submitted
  //   axios
  //     .post("/api/documents", {
  //       email,
  //       selectedValue1,
  //       selectedValue5,
  //       selectedValue2,
  //       selectedValue6,
  //       selectedValue3,
  //       selectedValue7,
  //       selectedValue4,
  //       selectedValue8,
  //     })
  //     .then((res) => console.log(res.data))
  //     .catch((err) => console.log(err));
  // };

  // const handleChange1 = (event) => {
  //   setSelectedValue1(event.target.value);
  // };
  // const handleChange2 = (event) => {
  //   setSelectedValue2(event.target.value);
  // };
  // const handleChange3 = (event) => {
  //   setSelectedValue3(event.target.value);
  // };
  // const handleChange4 = (event) => {
  //   setSelectedValue4(event.target.value);
  // };
  // const handleChange5 = (event) => {
  //   setSelectedValue5(event.target.value);
  // };
  // const handleChange6 = (event) => {
  //   setSelectedValue6(event.target.value);
  // };
  // const handleChange7 = (event) => {
  //   setSelectedValue7(event.target.value);
  // };
  // const handleChange8 = (event) => {
  //   setSelectedValue8(event.target.value);
  // };
  // const handleChange9 = (event) => {
  //   setSelectedValue9(event.target.value);
  // };
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Check if email was used before
  //   const previousData = localStorage.getItem(email);
  //   if (previousData) {
  //     const previousValues = JSON.parse(previousData);
  //     setselectedOptions(previousValues);
  //     alert("Your previous selections have been autofilled.");
  //   } else {
  //     alert("Please select other options.");
  //   }
  // };

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
  const [date, setDate] = useState(new Date());

  // Update the date and time every second
  setInterval(() => {
    setDate(new Date());
  }, 1000);
  const [userData, setUserData] = useState([
    {
      email: "",
      CurrencyA: "",
      objectivityA: "",
      ReliabilityA: "",
      relevanceA: "",
      CurrencyB: "",
      objectivityB: "",
      ReliabilityB: "",
      relevanceB: "",
      Similarity: "",
    },
  ]);

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  const submitData = async () => {
    const {
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
    } = userData;
    const res = await fetch(
      "https://ir-project-b6ee9-default-rtdb.firebaseio.com/user.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
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
        }),
      }
    );
    if (res) {
      alert("Data Stored");
    } else {
      alert("Select all the options");
    }
  };
  return (
    <div className="App">
      <h1> Compare Question answering results </h1>
      <br />
      <form method="POST">
        <label>
          Enter your email:
          <input
            type="email"
            name="email"
            value={userData.email}
            // onChange={(e) => setEmail(e.target.value)}
            onChange={postUserData}
          />
        </label>
      </form>
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
                <select
                  name="CurrencyA"
                  value={userData.CurrencyA}
                  onChange={postUserData}
                >
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
                <select
                  name="ReliabilityA"
                  value={userData.ReliabilityA}
                  onChange={postUserData}
                >
                  <option value="">--Select--</option>
                  <option value="reliable source">Reliable Source</option>
                  <option value="other source">Other Source</option>
                  <option value="no source">No Source</option>
                  <option value="not sure">Not Sure</option>
                </select>
              </td>
              <td>
                <select
                  name="objectivityA"
                  value={userData.objectivityA}
                  onChange={postUserData}
                >
                  <option value="">--Select--</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                  <option value="not sure">Not Sure</option>
                </select>
              </td>
              <td>
                <select
                  name="relevanceA"
                  value={userData.relevanceA}
                  onChange={postUserData}
                >
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
                <select
                  name="CurrencyB"
                  value={userData.CurrencyB}
                  onChange={postUserData}
                >
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
                <select
                  name="ReliabilityB"
                  value={userData.ReliabilityB}
                  onChange={postUserData}
                >
                  <option value="">--Select--</option>
                  <option value="reliable source">Reliable Source</option>
                  <option value="other source">Other Source</option>
                  <option value="no source">No Source</option>
                  <option value="not sure">Not Sure</option>
                </select>
              </td>
              <td>
                <select
                  name="objectivityB"
                  value={userData.objectivityB}
                  onChange={postUserData}
                >
                  <option value="">--Select--</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                  <option value="not sure">Not Sure</option>
                </select>
              </td>
              <td>
                <select
                  name="relevanceB"
                  value={userData.relevanceB}
                  onChange={postUserData}
                >
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
          <h3> Similarity Between the two Results </h3>
          <br />
          <div className="simi">
            <select
              name="Similarity"
              className="dropdown-menu"
              value={userData.Similarity}
              onChange={postUserData}
            >
              <option value="">--Select--</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
              <option value="not sure">Not Sure</option>
            </select>
          </div>
          <br />
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
          // disabled={
          //   !CurrencyA ||
          //   !CurrencyB ||
          //   !objectivityA ||
          //   !objectivityB ||
          //   !relevanceA ||
          //   !relevanceB ||
          //   !ReliabilityA ||
          //   !ReliabilityB ||
          //   !Similarity
          // }
          onClick={() => {
            submitData();
            // const newNote = {
            //   email: email,
            //   CurrencyA: selectedValue1,
            //   objectivityA: selectedValue2,
            //   ReliabilityA: selectedValue3,
            //   relevanceA: selectedValue4,
            //   CurrencyB: selectedValue5,
            //   objectivityB: selectedValue6,
            //   ReliabilityB: selectedValue7,
            //   relevanceB: selectedValue8,
            //   Similarity: selectedValue9,
            // };

            // axios.post("http://localhost:3001/create", newNote);
            // saveSelectedOptions();
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

      {submitted && (
        <div className="result">
          <p>Comment: {selectedQuestion.comment}</p>
        </div>
      )}
    </div>
  );
}

export default App;

// import React, { useState } from "react";
// import "./evaluation.css";

// const data = [
//   [
//     {
//       id: 1,
//       name: "John Doe",
//       age: 32,
//     },
//     {
//       id: 2,
//       name: "Jane Doe",
//       age: 28,
//     },
//   ],
//   [
//     {
//       id: 3,
//       name: "Alice Smith",
//       age: 26,
//     },
//     {
//       id: 4,
//       name: "Bob Smith",
//       age: 30,
//     },
//   ],
//   [
//     {
//       id: 5,
//       name: "Aliaqefegce Smith",
//       age: 26,
//     },
//     {
//       id: 6,
//       name: "Bob SRGSRGsrGSmith",
//       age: 30,
//     },
//   ],
// ];

// function App() {
//   const [index, setIndex] = useState(0);
//   const [comment, setComment] = useState("");

//   const handleSubmit = () => {
//     // Submit the evaluation metrics and comment to the server or handle it as necessary
//     console.log(`Evaluation metrics: ${index + 1}`);
//     console.log(`Comment: ${comment}`);
//   };

//   return (
//     <div className="App">
//       <table className="data-table">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Age</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data[index].map((person) => (
//             <tr key={person.id}>
//               <td>{person.id}</td>
//               <td>{person.name}</td>
//               <td>{person.age}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div className="buttons">
//         <button disabled={index === 0} onClick={() => setIndex(index - 1)}>
//           Previous
//         </button>
//         <button
//           disabled={index === data.length - 1}
//           onClick={() => setIndex(index + 1)}
//         >
//           Next
//         </button>
//       </div>
//       <div className="comment-section">
//         <form>
//           <label htmlFor="metrics">Evaluation Metrics:</label>
//           <select id="metrics">
//             <option value="Metric 1">Metric 1</option>
//             <option value="Metric 2">Metric 2</option>
//             <option value="Metric 3">Metric 3</option>
//           </select>
//         </form>
//         <br />
//         <textarea
//           className="comment-box"
//           placeholder="Enter your comment here"
//           value={comment}
//           onChange={(e) => setComment(e.target.value)}
//         />
//         <br />
//         <button className="submit-button" onClick={handleSubmit}>
//           Submit
//         </button>
//       </div>
//     </div>
//   );
// }

// export default App;
import React, { useState } from "react";
import "./evaluation.css";

const data = [
  [
    {
      id: 1,
      name: "John Doe",
      age: 32,
    },
  ],
  [
    {
      id: 3,
      name: "Alice Smith",
      age: 26,
    },
    {
      id: 4,
      name: "Bob Smith",
      age: 30,
    },
  ],
  [
    {
      id: 5,
      name: "Aliaqefegce Smith",
      age: 26,
    },
    {
      id: 6,
      name: "Bob SRGSRGsrGSmith",
      age: 30,
    },
  ],
];

function App() {
  const [index, setIndex] = useState(0);
  const [metrics, setMetrics] = useState("");
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleMetricsChange = (event) => {
    setMetrics(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="App">
      <h1> Comparision Between ChatGPT and Google </h1>
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
              <td>{person.google}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="buttons">
        <button disabled={index === 0} onClick={() => setIndex(index - 1)}>
          Previous
        </button>
        <button
          disabled={index === data.length - 1}
          onClick={() => setIndex(index + 1)}
        >
          Next
        </button>
      </div>
      {!submitted && (
        <div className="evaluation-form">
          <div>
            <label>Evaluation Metrics:</label>
            <select value={metrics} onChange={handleMetricsChange}>
              <option value="">--Select--</option>
              <option value="Excellent">Excellent</option>
              <option value="Good">Good</option>
              <option value="Average">Average</option>
              <option value="Poor">Poor</option>
            </select>
          </div>
          <div>
            <label>Comment:</label>
            <textarea value={comment} onChange={handleCommentChange} />
          </div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
      {submitted && (
        <div className="result">
          <p>Evaluation Metrics: {metrics}</p>
          <p>Comment: {comment}</p>
        </div>
      )}
    </div>
  );
}

export default App;

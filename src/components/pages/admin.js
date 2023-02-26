import React, { useState, useEffect } from "react";
// import { Navigate } from "react-router-dom";

function admin() {
  const [notes, setNotes] = useState([
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

  // useEffect(() => {
  //   fetch("/notes")
  //     .then((res) => {
  //       if (res.ok) {
  //         return res.json();
  //       }
  //     })
  //     .then((jsonRes) => setNotes(jsonRes));
  // });
  // const handleLogout = () => {
  //   localStorage.removeItem("token");
  //   Navigate.push("/login");
  // };
  return (
    <div>
      <h1>Admin Page</h1>
      {/* <button onClick={handleLogout}>Logout</button> */}
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Currency A</th>
            <th>Objectivity A</th>
            <th>Reliability A</th>
            <th>Relevance A</th>
            <th>Currency B</th>
            <th>Objectivity B</th>
            <th>Reliability B</th>
            <th>Relevance B</th>
            <th>Similarity</th>
          </tr>
        </thead>
        <tbody>
          {notes.map((note) => (
            <tr key={note._id}>
              <td>{note.email}</td>
              <td>{note.CurrencyA}</td>
              <td>{note.objectivityA}</td>
              <td>{note.ReliabilityA}</td>
              <td>{note.relevanceA}</td>
              <td>{note.CurrencyB}</td>
              <td>{note.objectivityB}</td>
              <td>{note.ReliabilityB}</td>
              <td>{note.relevanceB}</td>
              <td>{note.Similarity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default admin;

import React, { useState, useEffect } from "react";
import axios from "axios";

function app1() {
  const [selectedValue7, setSelectedValue7] = useState("");
  const [selectedValue8, setSelectedValue8] = useState("");
  const [input, setInput] = useState({
    title: "",
    content: "",
  });
  const handleChange7 = (event) => {
    setSelectedValue7(event.target.value);
  };
  const handleChange8 = (event) => {
    setSelectedValue8(event.target.value);
  };
  function handleChange(event) {
    const { name, value } = event.target;

    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  function handleClick(event) {
    event.preventDefault();

    const newNote = {
      title: input.title,
      content: input.content,
      option7: selectedValue7,
      option8: selectedValue8,
    };

    axios.post("http://localhost:3001/create", newNote);
  }

  return (
    <div className="container">
      <form>
        <div className="form-group">
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
          <input
            onChange={handleChange}
            name="title"
            value={input.title}
            autoComplete="off"
            className="form-control"
            placeholder="Note Title"
          />
        </div>
        <div className="form-group">
          <textarea
            onChange={handleChange}
            name="content"
            value={input.content}
            autocomplete="off"
            className="form-control"
            placeholder="Note Content"
          ></textarea>
        </div>

        <button
          onClick={handleClick}
          className="btn btn-lg btn-info"
          type="submit"
        >
          Add document
        </button>
      </form>
      {/* {documents.map((document) => (
        <div key={document._id}>
          <p>Name: {document.name}</p>
          <p>Age: {document.age}</p>
        </div>
      ))} */}
    </div>
  );
}

export default app1;

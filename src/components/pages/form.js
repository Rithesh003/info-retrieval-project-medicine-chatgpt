import React, { useState } from "react";

const options = ["Option A", "Option B", "Option C"];

const LabelerForm = () => {
  const [email, setEmail] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [formCompleted, setFormCompleted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if email is already used
    try {
      const previousData = localStorage.getItem(email);
      if (previousData) {
        const { option } = JSON.parse(previousData);
        setSelectedOption(option);
        setFormCompleted(true);
        alert("Welcome back! Your previous option was " + option);
      } else {
        // Save selected option in localStorage
        const formData = {
          option: selectedOption,
        };
        localStorage.setItem(email, JSON.stringify(formData));
        setSelectedOption("");
        setFormCompleted(true);
        alert("Thank you for submitting the form!");
      }
    } catch (error) {
      alert("Error retrieving previous data from localStorage.");
    }
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={handleEmailChange}
        required
      />

      {formCompleted ? (
        <p>
          You have already completed the form. Your previous option was{" "}
          {selectedOption}.
        </p>
      ) : (
        <>
          <p>Select an option:</p>

          {options.map((option) => (
            <label key={option}>
              <input
                type="radio"
                value={option}
                checked={selectedOption === option}
                onChange={handleOptionChange}
                required
              />
              {option}
            </label>
          ))}

          <button type="submit">Submit</button>
        </>
      )}
    </form>
  );
};

export default LabelerForm;

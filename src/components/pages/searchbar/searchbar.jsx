import React, { useEffect } from "react";
import styled from "styled-components";
import { IoSearch, IoClose } from "react-icons/io5";
import { useState, useRef } from "react";
import { motion } from "framer-motion/dist/framer-motion";
import { useClickOutside } from "react-click-outside-hook";
import { AnimatePresence } from "framer-motion";
import MoonLoader from "react-spinners/MoonLoader";
import { useDebounce } from "./debounceHook";
import "./searchbar.css";
// import { Button } from './Button';
// import './components/HeroSection.css';
const data = {
  1: [
    "Is it true that people with Alzheimer’s disease are particularly prone to depression?",
    "Answer1",
    "Link1",
    "image/Q1",
  ],
  2: [
    "Is it false that it has been scientifically proven that mental exercise can prevent a person from gettingAlzheimer’s disease? ",
    "Answer2",
    "Link2",
    "Image2",
  ],
};
const SearchBarContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 34em;
  height: 3.8em;
  background-color: transparent;
  border-radius: 6px;
  box-shadow: 0px 2px 12px 3px rgba(0, 0, 0, 0.13);
  overflow: hidden;
`;

const SearchInputContainer = styled.div`
  width: 100%;
  min-height: 4em;
  display: flex;
  align-items: center;
  position: relative;
  padding: 2px 15px;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  font-size: 23px;
  color: white;
  font-weight: 500;
  border-radius: 6px;
  background-color: transparent;

  &:focus {
    outline: none;
    &:: placeholder {
      opacity: 0;
    }
  }

  &:placeholder {
    color: #bebebe;
    transition: all 250ms ease-in-out;
  }
`;

const SearchIcon = styled.span`
  color: #bebebe;
  font-size: 27px;
  margin-right: 10px;
  vertical-align: middle;
`;
const CloseIcon = styled(motion.span)`
  color: #bebebe;
  font-size: 24px;
  vertical-align: middle;
  transition: all 200ms ease-in-out;
  cursor: pointer;

  &:hover {
    color: #dfdfdf;
  }
`;

const LineSeperator = styled.span`
  display: flex;
  min-width: 100%;
  min-height: 2px;
  background-color: #d8d8d878;
`;

const SearchContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1em;
`;
const LoadingWrapper = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const containerVariants = {
  expanded: {
    height: "20em",
  },
  collapsed: {
    height: "3.8em",
  },
};
const containerTransition = { type: "spring", damping: 22, stiffness: 150 };
export function SearchBar() {
  const [isExpanded, setExpanded] = useState(false);
  const [parentRef, isClickedOutside] = useClickOutside();
  const inputRef = useRef();
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const changeHandler = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
  };
  const handleSearch = (event) => {
    if (event.key === "Enter") {
      setSearchTerm(event.target.value);
      setSearchResults(
        Object.values(data).filter((item) =>
          item[0].toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  };
  // const handleEnterKeyPress = (event) => {
  //   if (event.key === 'Enter') {
  //     // Perform your search logic here and update the table content
  //   }
  // };

  const expandContainer = () => {
    setExpanded(true);
  };
  const collapseContainer = () => {
    setExpanded(false);
    setSearchQuery("");
    setLoading(false);
    if (inputRef.current) inputRef.current.value = "";
  };
  useEffect(() => {
    if (isClickedOutside) collapseContainer();
  }, [isClickedOutside]);

  const searchQuestion = async () => {
    if (!searchQuery || searchQuery.trim() === "") return;

    setLoading(true);

    // const DATA = prepareSearchQuery(searchQuery);
  };

  // const [selectedMetric, setSelectedMetric] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Selected option: ${selectedOption}`);
    // Here you can store the result in a database or anywhere else you want
  };
  // const metrics = [
  //   "Reliabilty",
  //   "Currency",
  //   "Readability",
  //   "disclosure",
  //   "objectivity",
  //   "relevance",
  // ];

  // const handleChange = (event) => {
  //   setSelectedMetric(event.target.value);
  // };
  useDebounce(searchQuery, 500, searchQuestion);

  return (
    <div className="hero-container">
      <video src="/videos/video1.mp4" autoPlay loop muted />
      {/* <div>
        <h3>Select Evaluation Metric:</h3>
        <select value={selectedMetric} onChange={handleChange}>
          <option value="">Select Metric</option>
          {metrics.map((metric) => (
            <option key={metric} value={metric}>
              {metric}
            </option>
          ))}
        </select>
        {selectedMetric ? (
          <p>Selected Metric: {selectedMetric}</p>
        ) : (
          <p>Please select a metric</p>
        )}
      </div> */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <input
              type="radio"
              value="Reliabilty"
              checked={selectedOption === "Reliabilty"}
              onChange={handleOptionChange}
            />
            Reliabilty
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="Currency"
              checked={selectedOption === "Currency"}
              onChange={handleOptionChange}
            />
            Currency
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="Readability"
              checked={selectedOption === "Readability"}
              onChange={handleOptionChange}
            />
            Readability
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="disclosure"
              checked={selectedOption === "disclosure"}
              onChange={handleOptionChange}
            />
            disclosure
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="objectivity"
              checked={selectedOption === "objectivity"}
              onChange={handleOptionChange}
            />
            objectivity
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="relevance"
              checked={selectedOption === "relevance"}
              onChange={handleOptionChange}
            />
            relevance
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
      <SearchBarContainer
        animate={isExpanded ? "expanded" : "collapsed"}
        variants={containerVariants}
        transition={containerTransition}
        ref={parentRef}
      >
        <SearchInputContainer>
          <SearchIcon>
            <IoSearch />
          </SearchIcon>
          <SearchInput
            placeholder="Search for questions"
            onFocus={expandContainer}
            ref={inputRef}
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            onKeyPress={handleSearch}
            onClick={changeHandler}
          />
          <AnimatePresence>
            {isExpanded && (
              <CloseIcon
                key="close-icon"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={collapseContainer}
                transition={{ duration: 0.2 }}
              >
                <IoClose />
              </CloseIcon>
            )}
          </AnimatePresence>
        </SearchInputContainer>
        <LineSeperator />
        <SearchContent>
          {isLoading && (
            <LoadingWrapper>
              <MoonLoader loading color="white" size={30} />
            </LoadingWrapper>
          )}
          {searchResults.length > 0 && (
            <tbody>
              {searchResults.map((result) => (
                <tr key={result[0]}>
                  <td>{result[0]}</td>
                  <td>
                    <a href={result[2]} target="blank">
                      {" "}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </SearchContent>
      </SearchBarContainer>
      {/* <input type="text" value={searchTerm} onChange={handleSearch} /> */}
      {searchResults.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>ChatGPT</th>
              <th>Google</th>
            </tr>
          </thead>
          <tbody>
            {searchResults.map((result) => (
              <tr key={result[0]}>
                <td>{result[1]}</td>
                <td>
                  <a href={result[2]} target="blank">
                    <img src={result[3]} alt={result[0]} />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

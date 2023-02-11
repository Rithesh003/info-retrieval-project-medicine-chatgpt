import React, { useEffect } from "react";
import styled from "styled-components";
import { IoSearch, IoClose } from "react-icons/io5";
import { useState, useRef } from "react";
import { motion } from "framer-motion/dist/framer-motion";
import { useClickOutside } from "react-click-outside-hook";
import { AnimatePresence } from "framer-motion";
import MoonLoader from "react-spinners/MoonLoader";
import { useDebounce } from "./debounceHook";
// import { Button } from './Button';
// import './components/HeroSection.css';

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
export function SearchBar(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [parentRef, isClickedOutside] = useClickOutside();
  const inputRef = useRef();
  const [searchQuery, setSearchQuery] = useState("");
  // const [isLoading, searchLoading] = useState(false);

  const changeHandler = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
  };
  const expandContainer = () => {
    setExpanded(true);
  };
  const collapseContainer = () => {
    setExpanded(false);
    if (inputRef.current) inputRef.current.value = "";
  };
  useEffect(() => {
    if (isClickedOutside) collapseContainer();
  }, [isClickedOutside]);

  // const [searchTerm, setSearchTerm] = useState("");
  // const [searchResults, setSearchResults] = useState([]);
  // search for questions in the dataset
  // const handleSearch = (event) => {
  //   setSearchTerm(event.target.value);
  //   setSearchResults(
  //     Object.values(data).filter((item) =>
  //       item[0].toLowerCase().includes(searchTerm.toLowerCase())
  //     )
  //   );
  // };

  const searchQuesdtion = () => {
    if (!searchQuery || searchQuery.timer() === "") return;

    // setLoading(true);
  };

  useDebounce(searchQuery, 500, searchQuesdtion);

  return (
    <div className="hero-container">
      <video src="/videos/video1.mp4" autoPlay loop muted />
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
            value={searchQuery}
            onChange={changeHandler}
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
          <LoadingWrapper>
            <MoonLoader loading color="white" size={30} />
          </LoadingWrapper>
        </SearchContent>
      </SearchBarContainer>
      {/* <input type="text" value={searchTerm} onChange={handleSearch} /> */}
      {/* {searchResults.length > 0 && (
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
                  <a href={result[2]} target="_blank">
                    <img src={result[3]} alt={result[0]} />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )} */}
    </div>
  );
}

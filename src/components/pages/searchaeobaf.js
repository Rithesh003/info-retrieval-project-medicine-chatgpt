import React, { useState } from 'react';

const data = {
  1: ["Question1", "Answer1", "Link1", "Image1"],
  2: ["Question2", "Answer2", "Link2", "Image2"],
  3: ["Question3", "Answer3", "Link3", "Image3"],
  4: ["Question4", "Answer4", "Link4", "Image4"]
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = event => {
    setSearchTerm(event.target.value);
    setSearchResults(
      Object.values(data).filter(
        item => item[0].toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleSearch} />
      {searchResults.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>ChatGPT</th>
              <th>Google</th>
            </tr>
          </thead>
          <tbody>
            {searchResults.map(result => (
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
      )}
    </div>
  );
};

export default App;

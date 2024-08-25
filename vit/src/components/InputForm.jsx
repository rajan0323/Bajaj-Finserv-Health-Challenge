import React, { useState } from 'react';
import axios from 'axios';
import Dropdown from './Dropdown';
import './InputForm.css';

const InputForm = () => {
  const [input, setInput] = useState('');
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const jsonInput = JSON.parse(input);

      if (!jsonInput.data) {
        throw new Error("Invalid JSON: 'data' key missing");
      }

      setError('');

      const response = await axios.post(import.meta.env.VITE_API_URL, jsonInput);
      setResponseData(response.data);
    } catch (err) {
      setError('Invalid JSON input');
      setResponseData(null);
    }
  };

  const handleOptionChange = (selected) => {
    setSelectedOptions(selected);
  };

  const filteredData = () => {
    if (!responseData) return null;

    const result = {};
    if (selectedOptions.some(option => option.value === 'alphabets')) {
      result.alphabets = responseData.alphabets;
    }
    if (selectedOptions.some(option => option.value === 'numbers')) {
      result.numbers = responseData.numbers;
    }
    if (selectedOptions.some(option => option.value === 'highest_lowercase_alphabet')) {
      result.highest_lowercase_alphabet = responseData.highest_lowercase_alphabet;
    }

    return result;
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='{"data": ["M", "1", "334", "4", "B"]}'
          className="json-input"
        />
        <button type="submit" className="submit-button">Submit</button>
      </form>
      {error && <p className="error-message">{error}</p>}

      {responseData && (
        <>
          <Dropdown onChange={handleOptionChange} />
          <div className="result-container">
            <h3>Filtered Response</h3>
            <pre>{JSON.stringify(filteredData(), null, 2)}</pre>
          </div>
        </>
      )}
    </div>
  );
};

export default InputForm;

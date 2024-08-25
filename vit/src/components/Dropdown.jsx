import React from 'react';
import Select from 'react-select';
import './Dropdown.css';

const options = [
  { value: 'alphabets', label: 'Alphabets' },
  { value: 'numbers', label: 'Numbers' },
  { value: 'highest_lowercase_alphabet', label: 'Highest Lowercase Alphabet' },
];

const Dropdown = ({ onChange }) => {
  return (
    <div className="dropdown-container">
      <h4>Multi Filter</h4>
      <Select
        isMulti
        options={options}
        onChange={onChange}
        className="select-dropdown"
      />
    </div>
  );
};

export default Dropdown;


import React, { useEffect } from 'react';
import InputForm from './components/InputForm';
import './App.css';

const App = () => {
  useEffect(() => {
    document.title = "VIT"; // Set the website title to "VIT" or any desired title
  }, []);

  return (
    <div className="app-container">
      <h1>API Input</h1>
      <InputForm />
    </div>
  );
};

export default App;

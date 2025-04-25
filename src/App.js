import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
  };
  const handleBackspace = () => {
    setInput((prev) => prev.slice(0, -1));
  };
  

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput('Xatolik');
    }
  };

  return (
    <div className="calculator">
      <div className="display">{input || '0'}</div>
      <div className="buttons">
        {[
          'M+', 'M-', 'MRC', 'GT',
          '7', '8', '9', '/',
          '4', '5', '6', '*',
          '1', '2', '3', '-',
          '0', '00', '.', '+',
          '√', '%', 'MU', '=',
        ].map((btn) => (
          <button
            key={btn}
            className={`btn ${btn === '=' ? 'equal' : ''}`}
            onClick={() => {
              if (btn === '=') handleCalculate();
              else if (btn === 'AC') handleClear();
              else handleClick(btn);
            }}
          >
            {btn}
          </button>
        ))}
        <button onClick={handleClear} className="btn clear">AC</button>
      </div>
    </div>
  );
}

export default App;
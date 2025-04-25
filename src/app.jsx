import React, { useState } from 'react';

const App = () => {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput('Error');
      }
    } else if (value === 'C') {
      setInput('');
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    '%', 'CE', 'C', '/',
    '7', '8', '9', '*',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '+/-', '0', '.', '='
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
      <div className="bg-blue-500 p-4 rounded-2xl shadow-lg w-72">
        <div className="bg-white text-right text-2xl p-4 rounded mb-4 h-16 overflow-auto">
          {input || '0'}
        </div>
        <div className="grid grid-cols-4 gap-2">
          {buttons.map((btn, i) => (
            <button
              key={i}
              className="bg-white text-blue-700 font-bold py-4 rounded text-xl shadow hover:bg-blue-200 transition"
              onClick={() => handleClick(btn)}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;

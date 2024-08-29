import './App.css';
import { useState } from 'react';
import Square from './Square';
import Input from './Input';

function App() {
  const [colorValue, setColorValue] = useState('');
  const [hexValue, setHexValue] = useState('');
  const [isDarkText, setIsDarkText] = useState(true); // Fix the typo here

  return (
    <div className="App">
      <Square
        colorValue={colorValue}
        hexValue={hexValue}
        isDarkText={isDarkText} // Pass isDarkText correctly
      />
      <Input
        colorValue={colorValue}
        setColorValue={setColorValue}
        setHexValue={setHexValue}
        isDarkText={isDarkText} // Pass isDarkText correctly
        setIsDarkText={setIsDarkText} // Fix the typo here
      />
    </div>
  );
}

export default App;


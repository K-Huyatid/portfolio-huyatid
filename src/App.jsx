import { useState } from 'react';
import './App.css';

function App() {
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const getRandomPosition = () => {
    const randomTop = Math.floor(Math.random() * 110); // random value between 0% and 80%
    const randomLeft = Math.floor(Math.random() * 110); // random value between 0% and 80%
    return { top: `${randomTop}%`, left: `${randomLeft}%` };
  };

  const handleMouseOver = () => {
    setPosition(getRandomPosition());
  };

  return (
    <div
      className="text-3xl font-bold underline bg-red-300"
      style={{ position: 'absolute', top: position.top, left: position.left }}
      onMouseOver={handleMouseOver}
    >
      Hello world! Test Test
    </div>
  );
}

export default App;

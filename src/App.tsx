import { useState } from "react";
import "./App.css";
import { useTypingEffect } from "./hooks/useTypingEffect";

function App() {
  const [textToShow, setTextToShow] = useState<string>("Digite algo abaixo...");

  const text = useTypingEffect(textToShow, 100);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setTextToShow(e.target.value);
  }
  return (
    <div className='App'>
      <div className='container'>
        <p className='text'>{text}</p>
        <input
          className='input'
          placeholder='Digite algo...'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleInputChange(e)
          }
        />
      </div>
    </div>
  );
}

export default App;

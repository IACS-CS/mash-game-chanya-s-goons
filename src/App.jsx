import { useState } from "react";
import "./App.css";

// Fisher-Yates Shuffle Function
// Source: https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
// Note: This function COPIES the original array before shuffling it.
const shuffleArray = (array) => {
  const shuffled = [...array]; // Create a copy to avoid modifying the original
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Helper to shuffle a string
const shuffleString = (str) => {
  const letters = shuffleArray(Array.from(str)); // Convert string to array and shuffle
  return letters.join(""); // Join back into a string
};

const App = () => {

  // Note: this function runs once when the App starts up
  // and then again any piece of state 
  // changes!
  
  // Example state and setter
  const [started,setStarted] = useState(false);

  // create state for an answer word (e.g. snowman)
  // create state for shuffled word (e.g. answer word shuffled)
  // create state for user input

  // The console.log statement below will show you each time
  // the App renders.
  console.log('Rendering app!','toggle is',started);


  // actions  
  const startGame = () => {
    // Set up scrambled words!
    setStarted(!started)
  }


  // render parts of our output...
  const renderStartPage = () => {
    if (started) {
      return renderScramblePage();
    } else {
      return <div><button onClick={startGame}>START</button></div>
    }
  }

  const renderScramblePage = () => {  
    return <div>
      // change to use shuffled word from state 
      <button>O</button>
      <button>N</button>
      <button>N</button>
      <button>W</button>
      <button>M</button>
      <button>A</button>
      <button>S</button>
       </div>
  }

  return (
  <main>
    <h1>CHRISTMAS WORD SCRAMBLE</h1>
    <div className="col">
      <div>
        {renderStartPage()}
      </div>
    </div>    
  </main>
  );
};

export default App;
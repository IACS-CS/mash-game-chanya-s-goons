import { useState } from "react";
import "./App.css";

// Fisher-Yates Shuffle Function
const shuffleArray = (array) => {
  const shuffled = [...array]; // Create a copy to avoid modifying the original
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Generate random index
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements
  }
  return shuffled; // Return shuffled array
};

// Helper to shuffle a string
const shuffleString = (str) => {
  const letters = shuffleArray(Array.from(str)); // Convert string to array and shuffle
  return letters.join(""); // Join shuffled letters into a string
};
// This is from ChatGPT
const App = () => {
  // State variables
  const [started, setStarted] = useState(false); // Track if the game has started
  const [answerWord, setAnswerWord] = useState("snowman"); // Set the answer word (e.g., snowman)
  const [shuffledWord, setShuffledWord] = useState(""); // Store shuffled word
  const [guessWord, setGuessWord] = useState(""); // Store shuffled word


  // Log statement to track re-renders and state changes
  console.log('Rendering app!', 'toggle is', started);

  // Start game function: Sets up the shuffled word
  const startGame = () => {
    setStarted(true); // Set game state to started
    const shuffled = shuffleString(answerWord); // Shuffle the answer word
    setShuffledWord(shuffled); // Set shuffled word in state
  };

  const addLetter = (ltr) => {
    setGuessWord (guessWord+ltr)
    // maybe check if it's right???
    if (guessWord+ltr == answerWord){window.alert("Correct! Yayy!")}
         
}


  // Function to render the start page or scramble page based on the "started" state
  const renderStartPage = () => {
    if (started) {
      return renderScramblePage(); // Show scramble page if game has started
    } else {
      return (
        <div>
          {/* Button to start the game */}
          <button onClick={startGame}>START</button>
        </div>
      );
    }
  };

  // Function to render the scramble page
  const renderScramblePage = () => {
    // Split shuffled word into an array of letters and map them into buttons
    const letters = shuffledWord.split(""); // Convert shuffled word into an array of letters

    return (
      <>
        <div>
          {/* Render each letter as a button */}
          {letters.map((letter, index) => (
            <button key={index}
            onClick={()=>{addLetter(letter)}}
            >{letter}</button>
          ))}
        </div>
        <div>{guessWord}</div>
      </>
    );
  };

  // Return the main part of the app
  return (
    <main>
      <h1>CHRISTMAS WORD SCRAMBLE</h1>
      <div className="col">
        <div>
          {renderStartPage()} {/* Conditionally render the start or scramble page */}
        </div>
      </div>
    </main>
  );
};

export default App;


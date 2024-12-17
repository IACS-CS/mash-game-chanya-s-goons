import { useState } from "react";
import "./App.css";

const App = () => {

  // Note: this function runs once when the App starts up
  // and then again any piece of state 
  // changes!
  
  // Example state and setter
  const [started,setStarted] = useState(false);

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
      <button>O</button>
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
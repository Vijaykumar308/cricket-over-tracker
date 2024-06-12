import { useState } from 'react';
import './App.css';
import ScoreDropdown from './components/ScoreDropdown';
import ScorePerBall from './components/ScorePerBall';

function App() {
  const [currentScore, setCurrentScore] = useState(new Array(6).fill(''));



  return (
    <>
    <div className="App">
      {/* <h2 className='heading'>Cricket Over Tracker</h2> */}
      <ScoreDropdown 
        currentScore={currentScore}
        setCurrentScore={setCurrentScore}
        />

      <ScorePerBall 
        currentScore={currentScore}
        />


    </div>
        </>
  );
}

export default App;

import { useState } from 'react';
import './App.css';
import ScoreDropdown from './components/ScoreDropdown';
import ScorePerBall from './components/ScorePerBall';

function App() {
  const [currentScore, setCurrentScore] = useState(['','','','','','']);
  const [overBall, setOverBall] = useState([1,2,3,4,5,6]);

  console.log('currentScore:',currentScore);

  return (
    <div className="App">
      <ScoreDropdown 
        currentScore={currentScore}
        setCurrentScore={setCurrentScore}
        setOverBall={setOverBall}
      />

      <ScorePerBall 
        currentScore={currentScore}
        setCurrentScore={setCurrentScore}
        overBall={overBall}
        setOverBall={setOverBall}
      />


    </div>
  );
}

export default App;

import React, { useState } from 'react'

const MAX_BALL_IN_OVER = 6;
function ScoreDropdown({currentScore, setCurrentScore, setOverBall}) {
  const [ballCount, setBallCount] = useState(0);

  const handleScoreChange = (e) => {
    const inValidBalls = ['NB', 'WD'];

    if(inValidBalls.includes(e.target.value)) {
      setCurrentScore([...currentScore, `1${e.target.value}`]);

      setOverBall((preBall) => [...preBall, `${e.target.value}`]);
    }
    
    else {
      setBallCount((prev) => prev+1);
      setCurrentScore([...currentScore, +e.target.value]);
    }
  }

  return (
    <div>
        <label htmlFor="score">Score</label>
        <select 
          name="score" 
          id="score" 
          onChange={(e) => handleScoreChange(e)}
          disabled={ballCount === MAX_BALL_IN_OVER}
        >
            <option value="" hidden > --select-- </option>
            <option value="1"> 1 </option>
            <option value="2"> 2 </option>
            <option value="3"> 3 </option>
            <option value="4"> 4 </option>
            <option value="6"> 6 </option>
            <option value="NB"> NB </option>
            <option value="WD"> WD </option>
        </select>
    </div>
  )
}

export default ScoreDropdown;

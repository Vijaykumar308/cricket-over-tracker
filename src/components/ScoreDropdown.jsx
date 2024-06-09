import React from 'react'

function ScoreDropdown({currentScore, setCurrentScore, setOverBall}) {
    const handleScoreChange = (e) => {
        const inValidBalls = ['NB', 'WD'];

        if(inValidBalls.includes(e.target.value)) {

            setCurrentScore([...currentScore, `1${e.target.value}`]);

            setOverBall((preBall) => [...preBall, `${e.target.value}`]);
        }
        else {
            setCurrentScore([...currentScore, +e.target.value]);
        }
    }

  return (
    <div>
        <label htmlFor="score">Score</label>
        <select name="score" id="score" onChange={(e) => handleScoreChange(e)}>
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

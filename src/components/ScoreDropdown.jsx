import { useState } from "react";

let MAX_BALL_IN_OVER = 6;
function ScoreDropdown({currentScore, setCurrentScore}) {
  const [ballCount, setBallCount] = useState(0);

  const handleScoreChange = (e) => {

    const inValidBalls = ['NB', 'WD','Dot'];

    const newScore = [...currentScore];

    if(inValidBalls.includes(e.target.value)) {
      MAX_BALL_IN_OVER++;
      if(e.target.value == "Dot") {
        newScore[ballCount] = `0${e.target.value}`;
      }
      else {
        
        newScore[ballCount] = `1${e.target.value}`;
      }

      setCurrentScore([...newScore, '']);
    } else {
      newScore[ballCount] = +e.target.value;
      setCurrentScore(newScore);
    }

    setBallCount((prev) => prev+1);
  }

  return (
    <div className='custom-select-container'>
        <label htmlFor="score" className="score-lable">Score</label>
        <select 
          name="score" 
          id="score" 
          onChange={(e) => handleScoreChange(e)}
          disabled={ballCount === MAX_BALL_IN_OVER}
          className='custom-select'
        >
            <option value="" hidden > --select-- </option>
            <option value="0"> Dot Ball </option>
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

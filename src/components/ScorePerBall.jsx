function ScorePerBall({currentScore}) {
    function getTotleScore(arr) {
        const inValidBalls = ['1NB', '1WD','Dot'];

        const totalRuns = arr.reduce((acc, elem) => {
            if (inValidBalls.includes(elem)) {
                return acc + 1;
            }
            else {
                return acc + elem;
            }

        }, 0);

        return totalRuns;
    }

    function countBalls(arr) {
        return arr.filter(item => typeof item === 'number').length;
    }

    return (
        <div>
            <div className="display-balls-container">
                {/* {console.log(countNumbers(currentScore))} */}
                <div className="score">{getTotleScore(currentScore)} / 0  <span className="overs">{countBalls(currentScore) != 6 ? `0. ${countBalls(currentScore)} Overs` :  "1 Overs" }</span></div>
                <div className="over-container">
                    <div className="balls">
                        {
                            currentScore.map((score, index) => {
                                return (
                                    <span key={index} className="per-ball">  
                                        <p className="runs">{score}</p>
                                    </span>
                                )
                            })
                        }
                    </div>
                   
                </div>
            </div>

        </div>
    )
}

export default ScorePerBall;

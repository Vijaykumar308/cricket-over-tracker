function ScorePerBall({currentScore}) {
    function getTotleScore(arr) {
        const inValidBalls = ['1NB', '1WD'];
        
        const totleRuns = arr.reduce((acc, elem) => {
            if (inValidBalls.includes(elem)) {
                return acc + 1;
            }
            else {
                return acc + elem;
            }

        }, 0);

        return totleRuns;
    }

    return (
        <div>
            <div className="display-balls-container">
                <div className="score">{getTotleScore(currentScore)} / 0  <span className="overs">0.2 Overs</span></div>
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

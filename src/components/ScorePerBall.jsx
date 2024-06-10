import { useEffect } from "react";

function ScorePerBall({currentScore}) {

    const currentBall = currentScore.length - 1;

    function getTotleScore(arr) {
        const inValidBalls = ['1NB', '1WD'];

        const sum = arr.reduce((acc, elem) => {
            if (inValidBalls.includes(elem)) {
                return acc + 1;
            }
            else {
                return acc + elem;
            }

        }, 0);

        return sum;
    }

    return (
        <div>
            <div className="display-balls-container">
                <div className="score">{getTotleScore(currentScore)} / 0</div>
                <div className="over-container">
                    {/* <p className="blower-name">Over: 2/6</p> */}
                    <div className="balls">
                        {
                            currentScore.map((score, index) => {
                                return (
                                    <span key={index} className="per-ball">  
                                        {score}
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

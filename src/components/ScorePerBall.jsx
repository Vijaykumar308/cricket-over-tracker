import { useEffect } from "react";

function ScorePerBall({ currentScore, overBall, setOverBall}) {

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
                {
                    // overBall.map((elem, index) => {
                    //     return (
                    //         <div key={index} className="per-ball">  
                    //             {currentBall === index ? currentScore[currentScore.length - 1] : ''}
                    //         </div>
                    //     )
                    // })

                    currentScore.map((score, index) => {
                        return (
                            <div key={index} className="per-ball">  
                                {score} {/* {currentBall === index ? currentScore[currentScore.length - 1] : ''} */}
                            </div>
                        )
                    })
                }
            </div>

            <p>Totle Score: {getTotleScore(currentScore)}</p>
        </div>
    )
}

export default ScorePerBall;

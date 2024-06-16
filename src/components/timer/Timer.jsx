import { useState } from 'react'
import './Timer.css'

const getHours = (seconds) => Math.floor(seconds / (60 * 60))
const getMinutes = (seconds) => Math.floor(seconds / 60) % 60
const getSeconds = (seconds) => seconds % 60
const formatTimeUnits = unitValue => unitValue < 10 ? `0${unitValue}` : `${unitValue}`

function Timer(props) {
    const startSeconds = props.start;
    const [timer, setTimer] = useState({ seconds: startSeconds, intervalId: null })

    const decreaseTimer = () => {
        console.log(``);
        console.log(`decreasing timer`);
        setTimer(timer => {
            console.log(`old timer ${timer.seconds}`);
            timer.seconds > 0 && timer.seconds--;
            timer.seconds <= 0 && stopTimer()
            console.log(`new timer ${timer.seconds}`);
            return { ...timer }
        })
    }

    const startTimer = () => {
        if (!timer.seconds) {
            console.log(``);
            console.log(`No seconds`);
            return;
        }

        console.log(``);
        console.log(`Staring timer`);
        setTimer(timer => {
            if (!timer.intervalId) {
                timer.intervalId = setInterval(decreaseTimer, 1000)
                console.log(`Interval created: ${timer.intervalId}`);
            }
            return { ...timer }
        })
    }

    const stopTimer = () => {
        console.log(``);
        console.log(`Stoping timer`);
        setTimer(timer => {
            console.log(`clearing interval id ${timer.intervalId}`);
            clearInterval(timer.intervalId)
            return { ...timer, intervalId: null }
        })
    }

    const resetTimer = () => {
        setTimer((timer) => {
            clearInterval(timer.intervalId);
            return { seconds: startSeconds, intervalId: null }
        })
    }

    return (
        <>
            <div className="card">
                <div className="title">{props.name}</div>
                <div className="display">
                    {formatTimeUnits(getHours(timer.seconds))} : {formatTimeUnits(getMinutes(timer.seconds))} : {formatTimeUnits(getSeconds(timer.seconds))}
                </div>

                <div className="separator"></div>

                <div className="menu">
                    <button onClick={startTimer} disabled={timer.intervalId || !timer.seconds}> Start </button>
                    <button onClick={stopTimer} disabled={!timer.intervalId}> Pause </button>
                    <button onClick={resetTimer} disabled={timer.intervalId}> Reset </button>
                </div>
            </div>
        </>
    )
}

export default Timer
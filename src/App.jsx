import { useState } from 'react'
import './App.css'

const startSeconds = 62;

function App() {
  const getHours = () => Math.floor(timer.seconds / (60 * 60))
  const getMinutes = () => Math.floor(timer.seconds / 60) % 60
  const getSeconds = () => timer.seconds % 60
  const formatTimeUnits = unitValue => unitValue < 10 ? `0${unitValue}` : `${unitValue}`

  const [timer, setTimer] = useState({ seconds: startSeconds, intervalId: null })

  const decreaseTimer = () => {
    setTimer(timer => {
      console.log(`decreasing timer ${timer.seconds}`);
      timer.seconds > 0 && timer.seconds--;
      timer.seconds <= 0 && stopTimer()
      return { ...timer }
    })
  }

  const startTimer = () => {
    console.log(`staring timer`);
    setTimer(timer => {
      if (!timer.intervalId) {
        timer.intervalId = setInterval(decreaseTimer, 1000)
        console.log(`Interval created: ${timer.intervalId}`);
      }
      return { ...timer }
    })
  }

  const stopTimer = () => {
    console.log(`stoping timer`);
    setTimer(timer => {
      console.log(`clearing interval id ${timer.intervalId}`);
      clearInterval(timer.intervalId)
      return { ...timer, intervalId: null }
    })
  }

  return (
    <>
      <h1>Countdown Timer</h1>
      <div className="card">
        <div className="display">
          {formatTimeUnits(getHours())} : {formatTimeUnits(getMinutes())} : {formatTimeUnits(getSeconds())}
        </div>
        <div className="menu">
          <button onClick={startTimer}>
            Start
          </button>
          <button onClick={stopTimer}>
            Pause
          </button>
        </div>
      </div>
    </>
  )
}

export default App

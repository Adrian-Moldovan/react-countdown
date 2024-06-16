import Timer from './components/timer/Timer';
import './App.css'

function App() {
  return (
    <>
      <h1>Countdown Timer</h1>
      <div className="app">
        <Timer start="12" name="Adi"/>
        <Timer start="75" name="Restu' lumii"/>
      </div>
    </>
  )
}

export default App

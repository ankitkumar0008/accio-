import "./App.css";
import CounterControls from "./components/CounterControls";
import CounterDisplay from "./components/CounterDisplay";
import CounterProvider from "./context/CounterProvider";

function App() {

  return (
    <div className="app-shell">
      <div className="assignment-card">
        <CounterProvider>
          <CounterDisplay></CounterDisplay>
          <CounterControls></CounterControls>
        </CounterProvider>
      </div>
    </div>
  )
}

export default App;
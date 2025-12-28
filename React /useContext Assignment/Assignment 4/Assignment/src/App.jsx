import "./App.css";
import SettingsPanel from "./components/SettingsPanel";
import CombinedProvider from "./context/CombinedProvider";

function App() {

  return (
    <div className="app-shell">
      <div className="assignment-card">
        <CombinedProvider>
          <SettingsPanel></SettingsPanel>
        </CombinedProvider>
      </div>
    </div>
  )
}

export default App;
import "./App.css";
import FeatureStatus from "./components/FeatureStatus";
import FeatureToggle from "./components/FeatureToggle";
import FeatureProvider from "./context/FeatureProvider";

function App() {

  return (
    <div className="app-shell">
      <div className="assignment-card">
        <FeatureProvider>
          <FeatureStatus></FeatureStatus>
          <FeatureToggle></FeatureToggle>
        </FeatureProvider>
      </div>
    </div>
  )
}

export default App;
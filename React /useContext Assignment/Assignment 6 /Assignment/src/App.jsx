import "./App.css";
import FilterPanel from "./components/FilterPanel";
import CombinedProvider from "./context/CombinedProvider";

function App() {

  return (
    <div className="app-shell">
      <div className="assignment-card">
        <CombinedProvider>
          <FilterPanel></FilterPanel>
        </CombinedProvider>
      </div>
    </div>
  )
}

export default App;